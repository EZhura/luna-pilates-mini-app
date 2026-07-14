document.addEventListener("DOMContentLoaded", function () {
    const tg = window.Telegram && window.Telegram.WebApp;

    if (tg) {
        tg.ready();
        tg.expand();
    }

    const translations = {
        ru: {
            heroKicker: "Pilates & mindful movement",
            heroTitle: "Баланс. Сила. Лёгкость.",
            heroText: "Студия пилатеса и осознанного движения для тела и души.",
            trialBtn: "Записаться на пробное занятие",
            consultBtn: "Получить консультацию",

            scheduleKicker: "Schedule",
            scheduleTitle: "Расписание",
            scheduleText: "Выберите направление и посмотрите доступные группы.",

            directionsKicker: "Directions",
            directionsTitle: "Направления",
            reformerText: "Работа на оборудовании для глубокой проработки мышц, улучшения осанки и силы.",
            matText: "Классический пилатес на коврике для гибкости, баланса и контроля движений.",
            stretchText: "Мягкая растяжка, мобильность, восстановление и снятие напряжения.",
            bookBtn: "Записаться",

            trainersKicker: "Instructors",
            trainersTitle: "Выбрать своего тренера",
            trainersText: "В пилатесе тренеров часто называют instructors. Клиент может выбрать специалиста под свою цель.",

            pricesKicker: "Prices",
            pricesTitle: "Цены",
            trialPriceTitle: "Пробное занятие",
            trialPriceText: "55 минут, знакомство со студией и подбор направления.",
            singlePriceTitle: "Разовое занятие",
            singlePriceText: "Любое направление в группе.",
            packPriceTitle: "Абонемент 8 занятий",
            packPriceText: "Регулярная практика и лучшая цена за занятие.",
            privatePriceTitle: "Индивидуальная тренировка",
            privatePriceText: "Персональная сессия с instructor.",
            bestBadge: "Выгодно",

            locationKicker: "Location",
            locationTitle: "Локация",
            locationAddress: "Пример адреса: Chavchavadze Ave, 34",
            locationText: "Демо-локация для концепта. В реальном проекте здесь будет точный адрес, карта и маршрут.",
            mapBtn: "Открыть в Google Maps",

            faqTitle: "Частые вопросы",
            faq1q: "Подойдёт ли пилатес новичкам?",
            faq1a: "Да. Для первого занятия лучше выбрать Mat Pilates Beginner или пробное занятие, чтобы instructor подобрал комфортную нагрузку.",
            faq2q: "Чем Reformer отличается от Mat Pilates?",
            faq2a: "Mat Pilates проходит на коврике, а Reformer — на специальном оборудовании с сопротивлением. Reformer помогает глубже почувствовать мышцы и точнее контролировать движение.",
            faq3q: "Можно ли заниматься при боли в спине?",
            faq3a: "Перед записью важно сообщить о боли или ограничениях. В таких случаях часто рекомендуют индивидуальную консультацию или мягкий формат Posture Care.",
            faq4q: "Что взять с собой?",
            faq4a: "Удобную одежду, воду и носки. Всё оборудование для занятия есть в студии.",
            faq5q: "Сколько длится занятие?",
            faq5a: "Обычно занятие длится 50–55 минут. Индивидуальные сессии могут длиться до 60 минут.",
            faq6q: "Нужна ли предварительная запись?",
            faq6a: "Да, места в группах ограничены. Лучше отправить заявку заранее и дождаться подтверждения от администратора.",
            faq7q: "Можно ли прийти на пробное занятие?",
            faq7a: "Да, пробное занятие помогает понять формат, познакомиться со студией и выбрать подходящее направление.",
            faq8q: "Какие языки доступны?",
            faq8a: "В демо-концепте доступны русский и английский языки. В реальном проекте можно добавить язык под аудиторию бизнеса.",
            faq9q: "Можно ли выбрать тренера?",
            faq9a: "Да, клиент может выбрать instructor по направлению, опыту и цели занятия.",
            faq10q: "Можно ли отменить или перенести занятие?",
            faq10a: "В демо-правилах перенос возможен заранее. В реальном проекте здесь можно указать точные условия студии.",

            finalTitle: "Готовы к своему первому шагу?",
            finalText: "Запишитесь на пробное занятие или задайте вопрос администратору.",

            floatingTrial: "Записаться на пробное",
            navHome: "Главная",
            navSchedule: "Расписание",
            navTrainers: "Тренеры",
            navPrices: "Цены",
            navContacts: "Контакты",

            bookingTitle: "Запись на занятие",
            bookingSubtitle: "Выберите направление, тренера и удобное время.",
            stepDirection: "1. Выберите направление",
            stepTrainer: "2. Выберите тренера",
            stepDate: "3. Выберите дату и время",
            formName: "Имя",
            formPhone: "Телефон",
            goalPosture: "для осанки",
            goalFlex: "для гибкости",
            goalRecovery: "для восстановления",
            formComment: "Комментарий",
            summaryText: "55 мин · профессиональное оборудование · персональное внимание",
            confirmBtn: "Подтвердить запись",

            sending: "Отправляем...",
            success: "Спасибо! Заявка отправлена.",
            error: "Не удалось отправить заявку. Попробуйте позже."
        },

        en: {
            heroKicker: "Pilates & mindful movement",
            heroTitle: "Balance. Strength. Lightness.",
            heroText: "A pilates and mindful movement studio for body and soul.",
            trialBtn: "Book a trial class",
            consultBtn: "Get a consultation",

            scheduleKicker: "Schedule",
            scheduleTitle: "Schedule",
            scheduleText: "Choose a direction and view available groups.",

            directionsKicker: "Directions",
            directionsTitle: "Directions",
            reformerText: "Equipment-based practice for deep muscle work, better posture and strength.",
            matText: "Classic mat pilates for flexibility, balance and movement control.",
            stretchText: "Soft stretching, mobility, recovery and tension release.",
            bookBtn: "Book",

            trainersKicker: "Instructors",
            trainersTitle: "Choose your instructor",
            trainersText: "In pilates, teachers are often called instructors. Clients can choose a specialist for their goal.",

            pricesKicker: "Prices",
            pricesTitle: "Prices",
            trialPriceTitle: "Trial class",
            trialPriceText: "55 minutes, studio introduction and direction selection.",
            singlePriceTitle: "Single class",
            singlePriceText: "Any group direction.",
            packPriceTitle: "8 classes package",
            packPriceText: "Regular practice and the best price per class.",
            privatePriceTitle: "Private session",
            privatePriceText: "A personal session with an instructor.",
            bestBadge: "Best value",

            locationKicker: "Location",
            locationTitle: "Location",
            locationAddress: "Example address: Chavchavadze Ave, 34",
            locationText: "Demo location for the concept. In a real project, this block includes the exact address, map and route.",
            mapBtn: "Open in Google Maps",

            faqTitle: "Frequently asked questions",
            faq1q: "Is pilates suitable for beginners?",
            faq1a: "Yes. For the first visit, Mat Pilates Beginner or a trial class is a good choice, so the instructor can select a comfortable level.",
            faq2q: "What is the difference between Reformer and Mat Pilates?",
            faq2a: "Mat Pilates is done on a mat, while Reformer Pilates uses special equipment with resistance. It helps clients feel muscles more deeply and control movement more precisely.",
            faq3q: "Can I join if I have back pain?",
            faq3a: "Please tell us about pain or limitations before booking. In such cases, a private consultation or soft Posture Care format may be recommended.",
            faq4q: "What should I bring?",
            faq4a: "Comfortable clothes, water and socks. All equipment is available in the studio.",
            faq5q: "How long is a class?",
            faq5a: "A class usually lasts 50–55 minutes. Private sessions may last up to 60 minutes.",
            faq6q: "Do I need to book in advance?",
            faq6a: "Yes, group spots are limited. It is better to send a request in advance and wait for confirmation from the admin.",
            faq7q: "Can I book a trial class?",
            faq7a: "Yes, a trial class helps you understand the format, meet the studio and choose the right direction.",
            faq8q: "What languages are available?",
            faq8a: "In this demo concept, Russian and English are available. In a real project, more languages can be added for the business audience.",
            faq9q: "Can I choose an instructor?",
            faq9a: "Yes, the client can choose an instructor by direction, experience and class goal.",
            faq10q: "Can I cancel or reschedule a class?",
            faq10a: "In this demo, rescheduling is possible in advance. In a real project, exact studio rules can be added here.",

            finalTitle: "Ready for your first step?",
            finalText: "Book a trial class or ask the admin a question.",

            floatingTrial: "Book a trial",
            navHome: "Home",
            navSchedule: "Schedule",
            navTrainers: "Instructors",
            navPrices: "Prices",
            navContacts: "Contacts",

            bookingTitle: "Class booking",
            bookingSubtitle: "Choose a direction, instructor and convenient time.",
            stepDirection: "1. Choose a direction",
            stepTrainer: "2. Choose an instructor",
            stepDate: "3. Choose date and time",
            formName: "Name",
            formPhone: "Phone",
            goalPosture: "posture",
            goalFlex: "flexibility",
            goalRecovery: "recovery",
            formComment: "Comment",
            summaryText: "55 min · professional equipment · personal attention",
            confirmBtn: "Confirm booking",

            sending: "Sending...",
            success: "Thank you! Your request has been sent.",
            error: "Could not send the request. Please try again later."
        }
    };

    let currentLang = "ru";

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
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

    document.querySelectorAll(".tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.schedule;

            document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
            document.querySelectorAll(".schedule-panel").forEach((panel) => panel.classList.remove("active"));

            tab.classList.add("active");
            document.getElementById(`schedule-${target}`).classList.add("active");
        });
    });

    const modal = document.getElementById("bookingModal");
    const closeButton = document.getElementById("modalClose");
    const form = document.getElementById("bookingForm");
    const status = document.getElementById("formStatus");

    function openModal() {
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".open-booking, .open-consultation").forEach((button) => {
        button.addEventListener("click", () => {
            const direction = button.dataset.direction;
            const trainer = button.dataset.trainer;

            if (direction) {
                const directionInput = form.querySelector(`input[name="direction"][value="${direction}"]`);
                if (directionInput) {
                    directionInput.checked = true;
                }
            }

            if (trainer) {
                const trainerSelect = form.querySelector('select[name="trainer"]');
                trainerSelect.value = trainer;
            }

            openModal();
        });
    });

    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        status.classList.remove("error");
        status.textContent = translations[currentLang].sending;

        const formData = new FormData(form);

        const payload = {
            direction: formData.get("direction"),
            trainer: formData.get("trainer"),
            date: formData.get("date"),
            time: formData.get("time"),
            name: formData.get("name"),
            phone: formData.get("phone"),
            contact: formData.get("contact"),
            goal: formData.get("goal"),
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

            status.textContent = translations[currentLang].success;

            if (tg && tg.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred("success");
            }

            setTimeout(() => {
                form.reset();
                closeModal();
                status.textContent = "";
            }, 1400);
        } catch (error) {
            console.error(error);
            status.classList.add("error");
            status.textContent = translations[currentLang].error;

            if (tg && tg.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred("error");
            }
        }
    });

    setLanguage(currentLang);
});