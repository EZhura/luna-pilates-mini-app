document.addEventListener("DOMContentLoaded", function () {
    const tg = window.Telegram && window.Telegram.WebApp;

    if (tg) {
        tg.ready();
        tg.expand();
    }

    const translations = {
        ru: {
            hero_eyebrow: "Pilates & mindful movement",
            hero_title: "Студия пилатеса в одной красивой ссылке",
            hero_subtitle: "Направления, цены, расписание, FAQ, адрес и заявка на пробное занятие — всё в одном Mini App.",
            hero_cta: "Записаться на пробное",
            hero_secondary: "Смотреть направления",
            trust_lang: "языки",
            trust_sections: "разделов",
            trust_link: "для bio",
            hero_card_text: "Ваш проводник в мире Pilates",
            quick_schedule: "Расписание",
            quick_classes: "Направления",
            quick_prices: "Цены",
            quick_booking: "Запись",

            intro_kicker: "About the studio",
            intro_title: "Мягкий путь к силе, осанке и спокойствию",
            intro_text: "Luna Pilates — демо-концепт для студии пилатеса и wellness-направления. Такой Mini App можно поставить в Instagram bio, WhatsApp, Google Maps или отправлять клиентам в переписке.",

            benefit_1_title: "Понятная структура",
            benefit_1_text: "Клиент быстро видит направления, цены и как записаться.",
            benefit_2_title: "Меньше вопросов в Direct",
            benefit_2_text: "FAQ закрывает базовые вопросы до переписки с администратором.",
            benefit_3_title: "Заявка в один шаг",
            benefit_3_text: "Клиент оставляет контакт, направление и удобное время.",

            classes_kicker: "Classes",
            classes_title: "Направления",
            classes_text: "Несколько форматов занятий для разных целей и уровня подготовки.",
            class_mat: "Классический пилатес на коврике для укрепления мышц, осанки и контроля тела.",
            class_reformer: "Глубокая работа с телом на реформере: сила, баланс, техника и плавность движений.",
            class_stretch: "Мягкая растяжка, мобильность суставов и восстановление после нагрузки.",
            class_private: "Индивидуальное занятие под цели клиента: осанка, спина, тонус, восстановление.",
            level_beginner: "Для новичков",
            level_popular: "Популярно",
            level_soft: "Мягкая практика",
            level_private: "Личный план",

            prices_kicker: "Prices",
            prices_title: "Цены",
            prices_text: "Демо-прайс в GEL для концепта студии в Тбилиси.",
            price_trial_title: "Пробное занятие",
            price_trial_text: "Пробное групповое занятие для знакомства со студией.",
            price_single_title: "Разовое занятие",
            price_single_text: "Разовое посещение группового занятия.",
            price_pack_title: "Абонемент на 8 занятий",
            price_pack_text: "Абонемент для регулярной практики и заметного результата.",
            price_private_title: "Индивидуальное занятие",
            price_private_text: "Индивидуальное занятие под личные цели и особенности тела.",
            price_badge: "Лучший выбор",

            schedule_kicker: "Schedule",
            schedule_title: "Расписание",
            schedule_text: "Удобные утренние и вечерние слоты для клиентов.",
            schedule_weekdays: "Понедельник — пятница",
            schedule_saturday: "Суббота",
            schedule_sunday: "Воскресенье",
            schedule_rest: "Выходной",

            instructors_kicker: "Experience",
            instructors_title: "Что получает клиент",
            experience_1: "Спокойное знакомство со студией до записи.",
            experience_2: "Понятный выбор направления без долгой переписки.",
            experience_3: "Адрес, условия и FAQ в одном месте.",
            experience_4: "Заявка уходит администратору в удобном формате.",

            faq_title: "Частые вопросы",
            faq_1_q: "Нужен ли опыт?",
            faq_1_a: "Нет, новички могут начать с Mat Pilates или пробного занятия.",
            faq_2_q: "Что взять с собой?",
            faq_2_a: "Удобную одежду, воду и хорошее настроение. Всё оборудование есть в студии.",
            faq_3_q: "Можно ли заниматься при боли в спине?",
            faq_3_a: "Лучше сообщить об этом заранее. Мы рекомендуем начать с индивидуальной консультации.",
            faq_4_q: "На каких языках проходят занятия?",
            faq_4_a: "В демо-концепте доступны русский и английский языки.",

            location_kicker: "Location",
            location_title: "Локация",
            location_text: "Tbilisi, Vera / Vake area. Точный адрес можно отправлять после подтверждения записи.",

            booking_kicker: "Booking request",
            booking_title: "Оставить заявку",
            booking_text: "Заполните короткую форму — администратор свяжется с вами для подтверждения времени.",
            booking_note_title: "Demo note:",
            booking_note_text: "в реальном проекте заявка может приходить в Telegram, Google Sheets или email.",
            form_name: "Имя",
            form_contact: "Телефон / Telegram / WhatsApp",
            form_class: "Направление",
            form_time: "Желаемая дата / время",
            form_language: "Язык",
            form_comment: "Комментарий",
            form_submit: "Отправить заявку",

            footer_text: "Created as a sample portfolio project for local service businesses.",

            form_success: "Спасибо! Заявка отправлена.",
            form_demo_success: "Спасибо! Демо-заявка создана.",
            form_error: "Не удалось отправить заявку. Попробуйте позже."
        },

        en: {
            hero_eyebrow: "Pilates & mindful movement",
            hero_title: "A pilates studio in one elegant link",
            hero_subtitle: "Classes, prices, schedule, FAQ, location and a booking request — all inside one Mini App.",
            hero_cta: "Book a trial class",
            hero_secondary: "View classes",
            trust_lang: "languages",
            trust_sections: "sections",
            trust_link: "for bio",
            hero_card_text: "Your guide to the world of Pilates",
            quick_schedule: "Schedule",
            quick_classes: "Classes",
            quick_prices: "Prices",
            quick_booking: "Booking",

            intro_kicker: "About the studio",
            intro_title: "A soft path to strength, posture and calm",
            intro_text: "Luna Pilates is a demo concept for a pilates and wellness studio. This Mini App can be placed in Instagram bio, WhatsApp, Google Maps or sent to clients in chat.",

            benefit_1_title: "Clear structure",
            benefit_1_text: "Clients quickly understand classes, prices and how to book.",
            benefit_2_title: "Fewer Direct questions",
            benefit_2_text: "FAQ answers basic questions before the client contacts the admin.",
            benefit_3_title: "One-step request",
            benefit_3_text: "The client leaves contact details, class type and preferred time.",

            classes_kicker: "Classes",
            classes_title: "Class formats",
            classes_text: "Several class formats for different goals and experience levels.",
            class_mat: "Classic mat pilates for strength, posture and body control.",
            class_reformer: "Deep body work on the reformer: strength, balance, technique and fluid movement.",
            class_stretch: "Soft stretching, joint mobility and recovery after training.",
            class_private: "A private session based on the client’s goals: posture, back care, tone and recovery.",
            level_beginner: "Beginner friendly",
            level_popular: "Most popular",
            level_soft: "Soft practice",
            level_private: "Personal plan",

            prices_kicker: "Prices",
            prices_title: "Prices",
            prices_text: "Demo pricing in GEL for a Tbilisi studio concept.",
            price_trial_title: "Trial class",
            price_trial_text: "A first group class to get to know the studio.",
            price_single_title: "Single class",
            price_single_text: "One group class visit.",
            price_pack_title: "8 classes package",
            price_pack_text: "A package for regular practice and visible progress.",
            price_private_title: "Private session",
            price_private_text: "A personal class based on individual goals and body needs.",
            price_badge: "Best choice",

            schedule_kicker: "Schedule",
            schedule_title: "Schedule",
            schedule_text: "Convenient morning and evening slots for clients.",
            schedule_weekdays: "Monday — Friday",
            schedule_saturday: "Saturday",
            schedule_sunday: "Sunday",
            schedule_rest: "Rest day",

            instructors_kicker: "Experience",
            instructors_title: "What the client gets",
            experience_1: "A calm introduction to the studio before booking.",
            experience_2: "A clear choice of classes without long messaging.",
            experience_3: "Location, terms and FAQ in one place.",
            experience_4: "The request goes to the admin in a convenient format.",

            faq_title: "Frequently asked questions",
            faq_1_q: "Do I need experience?",
            faq_1_a: "No, beginners can start with Mat Pilates or a trial class.",
            faq_2_q: "What should I bring?",
            faq_2_a: "Comfortable clothes, water and a good mood. All equipment is available in the studio.",
            faq_3_q: "Can I join if I have back pain?",
            faq_3_a: "Please tell us before the class. We recommend starting with a private consultation.",
            faq_4_q: "What languages are available?",
            faq_4_a: "In this demo concept, Russian and English are available.",

            location_kicker: "Location",
            location_title: "Location",
            location_text: "Tbilisi, Vera / Vake area. The exact address can be sent after booking confirmation.",

            booking_kicker: "Booking request",
            booking_title: "Send a request",
            booking_text: "Fill in a short form — the admin will contact you to confirm the time.",
            booking_note_title: "Demo note:",
            booking_note_text: "in a real project, requests can go to Telegram, Google Sheets or email.",
            form_name: "Name",
            form_contact: "Phone / Telegram / WhatsApp",
            form_class: "Preferred class",
            form_time: "Preferred date / time",
            form_language: "Language",
            form_comment: "Comment",
            form_submit: "Send request",

            footer_text: "Created as a sample portfolio project for local service businesses.",

            form_success: "Thank you! Your request has been sent.",
            form_demo_success: "Thank you! Demo request created.",
            form_error: "Could not send the request. Please try again later."
        }
    };

    let currentLang = "ru";

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            const value = translations[lang][key];

            if (value) {
                element.textContent = value;
            }
        });

        document.querySelectorAll(".lang-btn").forEach((button) => {
            button.classList.toggle("active", button.dataset.lang === lang);
        });
    }

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });

    const form = document.getElementById("bookingForm");
    const status = document.getElementById("formStatus");

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            status.classList.remove("error");
            status.textContent = currentLang === "ru" ? "Отправляем..." : "Sending...";

            const formData = new FormData(form);

            const payload = {
                name: formData.get("name"),
                contact: formData.get("contact"),
                classType: formData.get("classType"),
                preferredTime: formData.get("preferredTime"),
                language: formData.get("language"),
                comment: formData.get("comment")
            };

            try {
                const response = await fetch("/api/booking", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (!response.ok || !result.ok) {
                    throw new Error(result.message || "Request failed");
                }

                status.textContent = translations[currentLang].form_success;
                form.reset();

                if (tg && tg.HapticFeedback) {
                    tg.HapticFeedback.notificationOccurred("success");
                }
            } catch (error) {
                console.error(error);
                status.classList.add("error");
                status.textContent = translations[currentLang].form_error;

                if (tg && tg.HapticFeedback) {
                    tg.HapticFeedback.notificationOccurred("error");
                }
            }
        });
    }

    setLanguage(currentLang);
});