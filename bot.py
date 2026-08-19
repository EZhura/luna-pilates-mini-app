import os
import html
import json
import asyncio
import uuid
from datetime import datetime

import httpx
import gspread
from flask import Flask, request, jsonify, send_from_directory
from google.oauth2.service_account import Credentials
from dotenv import load_dotenv


load_dotenv()


BOT_TOKEN = os.getenv("BOT_TOKEN", "").strip()
ADMIN_CHAT_ID = os.getenv("ADMIN_CHAT_ID", "").strip()

WEB_APP_URL = os.getenv("WEB_APP_URL", "").strip()
RENDER_EXTERNAL_URL = os.getenv("RENDER_EXTERNAL_URL", "").strip()

GOOGLE_SHEET_NAME = os.getenv("GOOGLE_SHEET_NAME", "Luna Pilates — Bookings").strip()
GOOGLE_WORKSHEET_NAME = os.getenv("GOOGLE_WORKSHEET_NAME", "Bookings").strip()
GOOGLE_CREDENTIALS_JSON = os.getenv("GOOGLE_CREDENTIALS_JSON", "").strip()
STUDIO_TIMEZONE = os.getenv("STUDIO_TIMEZONE", "Europe/Madrid").strip()

if not WEB_APP_URL and RENDER_EXTERNAL_URL:
    WEB_APP_URL = RENDER_EXTERNAL_URL.rstrip("/")

if not WEB_APP_URL:
    WEB_APP_URL = "https://example.com"

TELEGRAM_API_URL = f"https://api.telegram.org/bot{BOT_TOKEN}"

app = Flask(__name__, static_folder="static", static_url_path="/static")


def safe_text(value: str) -> str:
    if value is None:
        return ""
    return html.escape(str(value).strip())


async def telegram_api(method: str, payload: dict) -> dict:
    if not BOT_TOKEN:
        return {"ok": False, "description": "BOT_TOKEN is not set"}

    async with httpx.AsyncClient(timeout=15) as client:
        response = await client.post(f"{TELEGRAM_API_URL}/{method}", json=payload)
        return response.json()


def run_async(coro):
    return asyncio.run(coro)


def get_google_credentials():
    scopes = [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
    ]

    if GOOGLE_CREDENTIALS_JSON:
        credentials_info = json.loads(GOOGLE_CREDENTIALS_JSON)
        return Credentials.from_service_account_info(
            credentials_info,
            scopes=scopes,
        )

    credentials_path = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        "google_credentials.json",
    )

    if os.path.exists(credentials_path):
        return Credentials.from_service_account_file(
            credentials_path,
            scopes=scopes,
        )

    raise FileNotFoundError(
        "Google credentials were not found. "
        "Add google_credentials.json locally or GOOGLE_CREDENTIALS_JSON on Render."
    )


def get_bookings_worksheet():
    credentials = get_google_credentials()
    client = gspread.authorize(credentials)
    spreadsheet = client.open(GOOGLE_SHEET_NAME)
    return spreadsheet.worksheet(GOOGLE_WORKSHEET_NAME)


def save_booking_to_sheets(
    booking_id: str,
    name: str,
    email: str,
    phone: str,
    notification_channel: str,
    direction: str,
    date: str,
    time: str,
    created_at: str,
):
    """Save a new booking request to Google Sheets."""
    worksheet = get_bookings_worksheet()

    worksheet.append_row(
        [
            booking_id,
            name,
            "",  # chat_id
            email,
            phone,
            notification_channel,
            direction,
            date,
            time,
            STUDIO_TIMEZONE,
            "new",
            "FALSE",
            created_at,
        ],
        value_input_option="USER_ENTERED",
    )


@app.route("/")
def index():
    return send_from_directory("static", "index.html")


@app.route("/healthz")
def healthz():
    return jsonify(
        {
            "status": "ok",
            "service": "Luna Pilates Mini App",
            "web_app_url": WEB_APP_URL,
            "bot_configured": bool(BOT_TOKEN),
            "admin_configured": bool(ADMIN_CHAT_ID),
            "google_sheet_name": GOOGLE_SHEET_NAME,
            "google_worksheet_name": GOOGLE_WORKSHEET_NAME,
        }
    )


@app.route("/api/booking", methods=["POST"])
def booking_request():
    data = request.get_json(silent=True) or {}

    name = safe_text(data.get("name"))
    phone = safe_text(data.get("phone"))
    notification_channel = safe_text(data.get("notification_channel")).lower()
    notification_contact = safe_text(data.get("notification_contact"))
    direction = safe_text(data.get("direction"))
    trainer = safe_text(data.get("trainer"))
    date = safe_text(data.get("date"))
    time = safe_text(data.get("time"))
    goal = safe_text(data.get("goal"))
    comment = safe_text(data.get("comment"))

    allowed_channels = {"email", "whatsapp", "telegram"}

    if not name or notification_channel not in allowed_channels or not notification_contact:
        return jsonify(
            {
                "ok": False,
                "message": "Please add your name and choose a notification contact.",
            }
        ), 400

    email = notification_contact if notification_channel == "email" else ""
    if notification_channel == "whatsapp" and not phone:
        phone = notification_contact

    created_at = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    booking_id = f"LUNA-{datetime.utcnow().strftime('%Y%m%d%H%M%S')}-{uuid.uuid4().hex[:6].upper()}"

    try:
        save_booking_to_sheets(
            booking_id=booking_id,
            name=name,
            email=email,
            phone=phone,
            notification_channel=notification_channel,
            direction=direction,
            date=date,
            time=time,
            created_at=created_at,
        )
        print(f"Booking {booking_id} saved to Google Sheets.")
    except Exception as error:
        # Google Sheets should not block the normal booking flow.
        # The error remains visible in local / Render logs for diagnostics.
        print(f"Google Sheets booking save failed for {booking_id}: {error}")

    message = f"""
🌙 <b>New Luna Pilates booking request</b>

<b>Booking ID:</b> {booking_id}
<b>Name:</b> {name}
<b>Phone:</b> {phone or "—"}
<b>Notification channel:</b> {notification_channel}
<b>Notification contact:</b> {notification_contact}

<b>Direction:</b> {direction or "Not selected"}
<b>Instructor:</b> {trainer or "Not selected"}
<b>Date:</b> {date or "Not selected"}
<b>Time:</b> {time or "Not selected"}
<b>Goal:</b> {goal or "Not selected"}

<b>Comment:</b>
{comment or "—"}

<i>Sent from Luna Pilates Mini App</i>
<i>{created_at}</i>
""".strip()

    if BOT_TOKEN and ADMIN_CHAT_ID:
        result = run_async(
            telegram_api(
                "sendMessage",
                {
                    "chat_id": ADMIN_CHAT_ID,
                    "text": message,
                    "parse_mode": "HTML",
                },
            )
        )

        if not result.get("ok"):
            return jsonify(
                {
                    "ok": False,
                    "message": "Request was created, but Telegram notification failed.",
                    "details": result,
                    "booking_id": booking_id,
                }
            ), 500

    return jsonify(
        {
            "ok": True,
            "message": "Thank you! Your request has been sent.",
            "booking_id": booking_id,
        }
    )


@app.route("/api/consultation", methods=["POST"])
def consultation_request():
    data = request.get_json(silent=True) or {}

    name = safe_text(data.get("name"))
    contact = safe_text(data.get("contact"))
    question = safe_text(data.get("question"))

    if not name or not contact or not question:
        return jsonify(
            {
                "ok": False,
                "message": "Please add your name, contact and question.",
            }
        ), 400

    created_at = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")

    message = f"""
💬 <b>New Luna Pilates consultation request</b>

<b>Name:</b> {name}
<b>Telegram / WhatsApp:</b> {contact}

<b>Question:</b>
{question}

<i>Sent from Luna Pilates Mini App</i>
<i>{created_at}</i>
""".strip()

    if BOT_TOKEN and ADMIN_CHAT_ID:
        result = run_async(
            telegram_api(
                "sendMessage",
                {
                    "chat_id": ADMIN_CHAT_ID,
                    "text": message,
                    "parse_mode": "HTML",
                },
            )
        )

        if not result.get("ok"):
            return jsonify(
                {
                    "ok": False,
                    "message": "Consultation request was created, but Telegram notification failed.",
                    "details": result,
                }
            ), 500

    return jsonify(
        {
            "ok": True,
            "message": "Thank you! Your question has been sent.",
        }
    )


@app.route("/telegram/webhook", methods=["POST"])
def telegram_webhook():
    update = request.get_json(silent=True) or {}

    message = update.get("message") or update.get("edited_message") or {}
    chat = message.get("chat") or {}
    chat_id = chat.get("id")
    text = (message.get("text") or "").strip()

    if not chat_id:
        return jsonify({"ok": True})

    if text.startswith("/start") or text.startswith("/demo") or text.startswith("/contact"):
        reply_text = """
Welcome to <b>Luna Pilates Studio</b> 🌙

This is a demo Mini App concept for a pilates / wellness studio.

Inside you can view:
• directions
• schedule
• instructors
• prices
• FAQ
• location
• trial class booking

Tap the button below to open the Mini App.
""".strip()
    else:
        reply_text = """
This bot opens the Luna Pilates Mini App demo 🌿

Tap the button below to view the studio concept.
""".strip()

    reply_markup = {
        "inline_keyboard": [
            [
                {
                    "text": "Open Mini App",
                    "web_app": {"url": WEB_APP_URL},
                }
            ],
            [
                {
                    "text": "Open in browser",
                    "url": WEB_APP_URL,
                }
            ],
        ]
    }

    run_async(
        telegram_api(
            "sendMessage",
            {
                "chat_id": chat_id,
                "text": reply_text,
                "parse_mode": "HTML",
                "reply_markup": reply_markup,
            },
        )
    )

    return jsonify({"ok": True})


def setup_webhook():
    if not BOT_TOKEN:
        print("BOT_TOKEN is not set. Telegram webhook was not configured.")
        return

    if not WEB_APP_URL or WEB_APP_URL == "https://example.com":
        print("WEB_APP_URL is not set. Telegram webhook was not configured.")
        return

    webhook_url = f"{WEB_APP_URL.rstrip('/')}/telegram/webhook"

    try:
        result = run_async(
            telegram_api(
                "setWebhook",
                {
                    "url": webhook_url,
                    "allowed_updates": ["message", "edited_message"],
                },
            )
        )
        print("Telegram webhook setup result:", result)
    except Exception as error:
        print("Webhook setup failed:", error)


if __name__ == "__main__":
    setup_webhook()
    port = int(os.getenv("PORT", "10000"))
    app.run(host="0.0.0.0", port=port)
