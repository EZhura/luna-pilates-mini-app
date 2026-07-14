import os
import html
import asyncio
from datetime import datetime

import httpx
from flask import Flask, request, jsonify, send_from_directory


BOT_TOKEN = os.getenv("BOT_TOKEN", "").strip()
ADMIN_CHAT_ID = os.getenv("ADMIN_CHAT_ID", "").strip()

# Render usually gives this automatically if you add it manually as WEB_APP_URL.
# Example: https://luna-pilates-mini-app.onrender.com
WEB_APP_URL = os.getenv("WEB_APP_URL", "").strip()
RENDER_EXTERNAL_URL = os.getenv("RENDER_EXTERNAL_URL", "").strip()

if not WEB_APP_URL and RENDER_EXTERNAL_URL:
    WEB_APP_URL = RENDER_EXTERNAL_URL.rstrip("/")

if not WEB_APP_URL:
    WEB_APP_URL = "https://example.com"

TELEGRAM_API_URL = f"https://api.telegram.org/bot{BOT_TOKEN}"

app = Flask(__name__, static_folder="static", static_url_path="/static")


def safe_text(value: str) -> str:
    """Escape text for safe Telegram HTML messages."""
    if value is None:
        return ""
    return html.escape(str(value).strip())


async def telegram_api(method: str, payload: dict) -> dict:
    """Send request to Telegram Bot API."""
    if not BOT_TOKEN:
        return {"ok": False, "description": "BOT_TOKEN is not set"}

    async with httpx.AsyncClient(timeout=15) as client:
        response = await client.post(f"{TELEGRAM_API_URL}/{method}", json=payload)
        return response.json()


def run_async(coro):
    """Run async function inside Flask route safely."""
    return asyncio.run(coro)


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
        }
    )


@app.route("/api/booking", methods=["POST"])
def booking_request():
    data = request.get_json(silent=True) or {}

    name = safe_text(data.get("name"))
    contact = safe_text(data.get("contact"))
    class_type = safe_text(data.get("classType"))
    preferred_time = safe_text(data.get("preferredTime"))
    language = safe_text(data.get("language"))
    comment = safe_text(data.get("comment"))

    if not name or not contact:
        return jsonify(
            {
                "ok": False,
                "message": "Please add your name and contact.",
            }
        ), 400

    created_at = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")

    message = f"""
🌙 <b>New Luna Pilates request</b>

<b>Name:</b> {name}
<b>Contact:</b> {contact}
<b>Class:</b> {class_type or "Not selected"}
<b>Preferred time:</b> {preferred_time or "Not selected"}
<b>Language:</b> {language or "Not selected"}

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
                }
            ), 500

    return jsonify(
        {
            "ok": True,
            "message": "Thank you! Your request has been sent.",
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

    first_name = safe_text(chat.get("first_name") or "there")

    if text.startswith("/start") or text.startswith("/demo") or text.startswith("/contact"):
        reply_text = f"""
Welcome to <b>Luna Pilates Studio</b> 🌙

This is a demo Mini App concept for a pilates / wellness studio.

Inside you can view:
• class formats
• prices
• schedule
• FAQ
• location
• booking request form

Tap the button below to open the Mini App.
""".strip()
    else:
        reply_text = f"""
Hi, {first_name} 🌿

This bot opens the Luna Pilates Mini App demo.

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
    """Set Telegram webhook automatically on Render startup."""
    if not BOT_TOKEN:
        print("BOT_TOKEN is not set. Telegram bot webhook was not configured.")
        return

    if not WEB_APP_URL or WEB_APP_URL == "https://example.com":
        print("WEB_APP_URL is not set. Telegram bot webhook was not configured.")
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