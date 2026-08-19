document.addEventListener("DOMContentLoaded", function () {
    const tg = window.Telegram && window.Telegram.WebApp;

    if (tg) {
        tg.ready();
        tg.expand();
    }

    const translations = {
        ru: {
            customDateLabel: "Выберите дату в календаре",
            calendarFieldTitle: "Календарь",
            calendarFieldHint: "Нажмите, чтобы выбрать дату",
            heroKicker: "Pilates for every body",
            heroTitle: "Двигайся с мягкой силой.",
            heroText: "Осознанное движение, точная работа с телом и спокойный ритм — от первого занятия до устойчивого результата.",
            heroPoint1Title: "Reformer & Mat",
            heroPoint1Text: "Оборудование и работа с телом",
            heroPoint2Title: "Малые группы",
            heroPoint2Text: "Больше внимания каждому",
            heroPoint3Title: "Персональный подход",
            heroPoint3Text: "Поддержка на каждом этапе",
            strip1Title: "Гибкое расписание",
            strip1Text: "Занятия утром и вечером",
            strip2Title: "Для любого уровня",
            strip2Text: "Подходит и для первого занятия",
            strip3Title: "Чувствовать себя лучше",
            strip3Text: "Сила, мобильность, ясность",
            strip4Text: "Светлая спокойная студия",
            navClasses: "Занятия",
            navStudio: "Студия",
            trialBtn: "Записаться на пробное занятие",
            consultBtn: "Получить консультацию",
            monShort: "Пн", tueShort: "Вт", wedShort: "Ср", thuShort: "Чт", friShort: "Пт", satShort: "Сб", sunShort: "Вс", dayOff: "Выходной",
            experienceLabel: "Опыт:",
            annaName: "Анна", annaExperience: "6 лет", annaBio: "Reformer, осанка, сила, мягкое восстановление.",
            sofiaName: "София", sofiaExperience: "5 лет", sofiaBio: "Mat Pilates, stretch, занятия для начинающих.",
            mariaName: "Мария", mariaExperience: "7 лет", mariaBio: "Rehabilitation, core, индивидуальный подход.",
            elenaName: "Елена", elenaExperience: "8 лет", elenaBio: "Mobility, дыхание, anti-stress практики.",
            namePlaceholder: "Анна", phonePlaceholder: "+995...", contactPlaceholder: "@username или номер", commentPlaceholder: "Расскажите о себе, если есть особенности", questionPlaceholder: "Например: какое направление лучше выбрать новичку?", dateAriaLabel: "Выберите дату",

            scheduleKicker: "Schedule",
            scheduleTitle: "Расписание",
            scheduleText: "Выберите направление и посмотрите доступные группы.",

            directionsKicker: "Directions",
            directionsTitle: "Направления",
            reformerText: "Работа на оборудовании для глубокой проработки мышц, улучшения осанки и силы.",
            matText: "Классический пилатес на коврике для гибкости, баланса и контроля движений.",
            stretchText: "Мягкая растяжка, мобильность, восстановление и снятие напряжения.",
            moreBtn: "Подробнее",
            reformerMore: "Reformer Pilates подходит тем, кто хочет укрепить глубокие мышцы, улучшить осанку и научиться точнее контролировать движение. Занятие проходит на специальном оборудовании с регулируемым сопротивлением.",
            matMore: "Mat Pilates — хороший старт для новичков. Занятия помогают развивать гибкость, баланс, стабильность корпуса и мягко укреплять тело без перегрузки.",
            stretchMore: "Stretch & Mobility помогает снять напряжение, улучшить подвижность суставов и восстановиться после нагрузки. Подходит для мягкой практики и anti-stress формата.",
            bookBtn: "Записаться",

            trainersKicker: "Instructors",
            trainersTitle: "Познакомьтесь с инструкторами",
            trainersText: "Наши инструкторы будут рады помочь в достижении ваших целей.",

            pricesKicker: "Prices",
            pricesTitle: "Цены",
            trialPriceTitle: "Пробное занятие",
            trialPriceText: "55 минут, знакомство со студией и подбор направления.",
            singlePriceTitle: "Разовое занятие",
            singlePriceText: "Любое направление в группе.",
            packPriceTitle: "Абонемент 8 занятий",
            packPriceText: "Регулярная практика и лучшая цена за занятие.",
            privatePriceTitle: "Индивидуальная тренировка",
            privatePriceText: "Персональная сессия с инструктором.",
            bestBadge: "Выгодно",

            locationKicker: "Location",
            locationTitle: "Локация",
            locationAddress: "Пример адреса: Chavchavadze Ave, 34",
            locationText: "Демо-локация для концепта. В реальном проекте здесь будет точный адрес, карта и маршрут.",
            mapBtn: "Открыть в Google Maps",

            faqTitle: "Частые вопросы",
            faq1q: "Подойдёт ли пилатес новичкам?",
            faq1a: "Да. Для первого занятия лучше выбрать Mat Pilates Beginner или пробное занятие, чтобы инструктор подобрал комфортную нагрузку.",
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
            faq9q: "Как подбирается инструктор?",
            faq9a: "Инструктор подбирается автоматически по выбранному направлению. Для индивидуальных задач можно отправить запрос на консультацию.",
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
            bookingSubtitle: "Выберите направление — мы покажем инструктора и доступное время.",
            stepDirection: "1. Выберите направление",
            stepTrainer: "2. Ваш инструктор",
            stepDate: "3. Выберите дату и время",
            autoTrainerHint: "Инструктор подбирается автоматически по выбранному направлению.",
            availableDates: "Ближайшие даты по расписанию",
            availableTimes: "Доступное время",
            noClassesDate: "На эту дату занятий выбранного направления нет. Выберите другую дату.",
            calendarShort: "Выбрать",
            calendarSmall: "другую дату",
            formName: "Имя",
            formPhone: "Телефон",
            notificationTitle: "Куда отправить подтверждение и напоминание?",
            notificationEmailLabel: "Email",
            notificationEmailPlaceholder: "name@example.com",
            notificationEmailHint: "На этот адрес придут подтверждение и напоминание.",
            notificationWhatsappLabel: "Номер WhatsApp",
            notificationWhatsappPlaceholder: "+995...",
            notificationWhatsappHint: "Сохраним номер для уведомлений через WhatsApp.",
            notificationTelegramLabel: "Telegram",
            notificationTelegramPlaceholder: "@username",
            notificationTelegramHint: "Сохраним Telegram-контакт. Автоматические уведомления подключим отдельно.",
            goalTitle: "Для чего вам нужны занятия?",
            goalPosture: "Улучшить осанку",
            goalFlex: "Развить гибкость",
            goalRecovery: "Восстановиться и снять напряжение",
            formComment: "Комментарий",
            summaryText: "55 мин · профессиональное оборудование · персональное внимание",
            confirmBtn: "Подтвердить запись",

            consultationTitle: "Задайте интересующий вас вопрос",
            consultationSubtitle: "Администратор поможет выбрать направление, инструктора или удобное время.",
            questionLabel: "Ваш вопрос",
            sendQuestionBtn: "Отправить вопрос",

            sending: "Отправляем...",
            success: "Спасибо! Заявка отправлена.",
            consultationSuccess: "Спасибо! Ваш вопрос отправлен.",
            error: "Не удалось отправить заявку. Попробуйте позже."
        },

        en: {

            calendarFieldTitle: "Calendar",
            calendarFieldHint: "Tap to choose a date",
            heroKicker: "Pilates for every body",
            heroTitle: "Move with calm strength.",
            heroText: "Mindful movement, precise body work and a calm rhythm — from your first class to a stronger routine.",
            heroPoint1Title: "Reformer & Mat",
            heroPoint1Text: "Equipment and precise body work",
            heroPoint2Title: "Small groups",
            heroPoint2Text: "More attention for each client",
            heroPoint3Title: "Personal guidance",
            heroPoint3Text: "Support at every stage",
            strip1Title: "Flexible scheduling",
            strip1Text: "Morning and evening classes",
            strip2Title: "All levels welcome",
            strip2Text: "A comfortable first step for beginners",
            strip3Title: "Feel your best",
            strip3Text: "Strength, mobility and clarity",
            strip4Text: "A bright, calm studio",
            navClasses: "Classes",
            navStudio: "Studio",
            trialBtn: "Book a trial class",
            consultBtn: "Get a consultation",
            monShort: "Mon", tueShort: "Tue", wedShort: "Wed", thuShort: "Thu", friShort: "Fri", satShort: "Sat", sunShort: "Sun", dayOff: "Day off",
            experienceLabel: "Experience:",
            annaName: "Anna", annaExperience: "6 years", annaBio: "Reformer, posture, strength and gentle recovery.",
            sofiaName: "Sofia", sofiaExperience: "5 years", sofiaBio: "Mat Pilates, stretching and beginner-friendly classes.",
            mariaName: "Maria", mariaExperience: "7 years", mariaBio: "Rehabilitation, core and an individual approach.",
            elenaName: "Elena", elenaExperience: "8 years", elenaBio: "Mobility, breathing and anti-stress practices.",
            namePlaceholder: "Anna", phonePlaceholder: "+995...", contactPlaceholder: "@username or phone number", commentPlaceholder: "Tell us about any needs or limitations", questionPlaceholder: "For example: which class is best for a beginner?", dateAriaLabel: "Choose a date",

            scheduleKicker: "Schedule",
            scheduleTitle: "Schedule",
            scheduleText: "Choose a direction and view available groups.",

            directionsKicker: "Directions",
            directionsTitle: "Directions",
            reformerText: "Equipment-based practice for deep muscle work, better posture and strength.",
            matText: "Classic mat pilates for flexibility, balance and movement control.",
            stretchText: "Soft stretching, mobility, recovery and tension release.",
            moreBtn: "More details",
            reformerMore: "Reformer Pilates is ideal for strengthening deep muscles, improving posture and learning precise movement control. The class uses special equipment with adjustable resistance.",
            matMore: "Mat Pilates is a good starting point for beginners. It helps develop flexibility, balance, core stability and gentle strength without overload.",
            stretchMore: "Stretch & Mobility helps release tension, improve joint mobility and recover after training. It is suitable for soft practice and anti-stress sessions.",
            bookBtn: "Book",

            trainersKicker: "Instructors",
            trainersTitle: "Meet your instructors",
            trainersText: "Our instructors will be happy to help you reach your goals.",

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
            faq9q: "How is the instructor selected?",
            faq9a: "The instructor is selected automatically based on the chosen direction. For individual needs, you can send a consultation request.",
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
            bookingSubtitle: "Choose a direction — we’ll show the instructor and available times.",
            stepDirection: "1. Choose a direction",
            stepTrainer: "2. Your instructor",
            stepDate: "3. Choose date and time",
            autoTrainerHint: "The instructor is selected automatically for the chosen direction.",
            availableDates: "Next dates from the schedule",
            availableTimes: "Available times",
            noClassesDate: "There are no classes for this direction on this date. Please choose another date.",
            calendarShort: "Choose",
            calendarSmall: "another date",
            formName: "Name",
            formPhone: "Phone",
            notificationTitle: "Where should we send confirmation and reminders?",
            notificationEmailLabel: "Email",
            notificationEmailPlaceholder: "name@example.com",
            notificationEmailHint: "Confirmation and reminders will be sent to this address.",
            notificationWhatsappLabel: "WhatsApp number",
            notificationWhatsappPlaceholder: "+995...",
            notificationWhatsappHint: "We’ll save this number for WhatsApp notifications.",
            notificationTelegramLabel: "Telegram",
            notificationTelegramPlaceholder: "@username",
            notificationTelegramHint: "We’ll save your Telegram contact. Automatic Telegram notifications can be connected separately.",
            goalTitle: "What would you like classes to help with?",
            goalPosture: "Improve posture",
            goalFlex: "Build flexibility",
            goalRecovery: "Recover and release tension",
            formComment: "Comment",
            summaryText: "55 min · professional equipment · personal attention",
            confirmBtn: "Confirm booking",

            consultationTitle: "Ask your question",
            consultationSubtitle: "The admin will help you choose a direction, instructor or convenient time.",
            questionLabel: "Your question",
            sendQuestionBtn: "Send question",

            sending: "Sending...",
            success: "Thank you! Your request has been sent.",
            consultationSuccess: "Thank you! Your question has been sent.",
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

        document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
            const key = element.getAttribute("data-i18n-placeholder");
            if (translations[lang][key]) element.placeholder = translations[lang][key];
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
            const key = element.getAttribute("data-i18n-aria-label");
            if (translations[lang][key]) element.setAttribute("aria-label", translations[lang][key]);
        });

        document.querySelectorAll(".lang-btn").forEach((button) => {
            button.classList.toggle("active", button.dataset.lang === lang);
        });

        if (typeof refreshBookingLogic === "function" && document.getElementById("bookingForm")) {
            refreshBookingLogic();
        }

        if (typeof updateNotificationField === "function" && document.getElementById("notificationContact")) {
            updateNotificationField();
        }
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
    const bookingTrainer = document.getElementById("bookingTrainer");
    const autoTrainerName = document.getElementById("autoTrainerName");
    const autoTrainerMeta = document.getElementById("autoTrainerMeta");
    const bookingDateChips = document.getElementById("bookingDateChips");
    const bookingTimeChips = document.getElementById("bookingTimeChips");
    const customDate = document.getElementById("customDate");
    const customDateRow = document.getElementById("customDateRow");
    const dateValidation = document.getElementById("dateValidation");
    const notificationContact = document.getElementById("notificationContact");
    const notificationContactLabel = document.getElementById("notificationContactLabel");
    const notificationContactHint = document.getElementById("notificationContactHint");

    function updateNotificationField() {
        const channel = form.querySelector('input[name="notification_channel"]:checked')?.value || "email";

        if (channel === "email") {
            notificationContact.type = "email";
            notificationContactLabel.textContent = translations[currentLang].notificationEmailLabel;
            notificationContact.placeholder = translations[currentLang].notificationEmailPlaceholder;
            notificationContactHint.textContent = translations[currentLang].notificationEmailHint;
        } else if (channel === "whatsapp") {
            notificationContact.type = "tel";
            notificationContactLabel.textContent = translations[currentLang].notificationWhatsappLabel;
            notificationContact.placeholder = translations[currentLang].notificationWhatsappPlaceholder;
            notificationContactHint.textContent = translations[currentLang].notificationWhatsappHint;
        } else {
            notificationContact.type = "text";
            notificationContactLabel.textContent = translations[currentLang].notificationTelegramLabel;
            notificationContact.placeholder = translations[currentLang].notificationTelegramPlaceholder;
            notificationContactHint.textContent = translations[currentLang].notificationTelegramHint;
        }
    }

    form.querySelectorAll('input[name="notification_channel"]').forEach((input) => {
        input.addEventListener("change", updateNotificationField);
    });

    const bookingRules = {
        "Reformer Pilates": {
            trainer: "Анна",
            meta: { ru: "Reformer Pilates · осанка и сила", en: "Reformer Pilates · posture & strength" },
            schedule: {
                1: ["08:00", "18:30"],
                2: ["10:30", "19:00"],
                3: ["09:00", "18:30"],
                4: ["10:00", "19:30"],
                5: ["08:00", "18:30"],
                6: ["10:00", "12:00"]
            }
        },
        "Mat Pilates": {
            trainer: "София",
            meta: { ru: "Mat Pilates · техника и баланс", en: "Mat Pilates · technique & balance" },
            schedule: {
                1: ["09:30", "19:00"],
                2: ["08:30", "18:30"],
                3: ["10:30", "20:00"],
                4: ["09:00", "18:30"],
                5: ["10:00", "19:00"],
                6: ["11:00"]
            }
        },
        "Stretch & Mobility": {
            trainer: "Елена",
            meta: { ru: "Mobility · восстановление и anti-stress", en: "Mobility · recovery & anti-stress" },
            schedule: {
                1: ["20:00"],
                2: ["12:00"],
                3: ["20:00"],
                4: ["12:00", "19:30"],
                5: ["20:00"],
                6: ["12:00"]
            }
        }
    };

    const weekdayNames = {
        ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };
    const monthNames = {
        ru: ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
        en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    };

    function getSelectedDirection() {
        return form.querySelector('input[name="direction"]:checked')?.value || "Reformer Pilates";
    }

    function toLocalIsoDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    function formatDateChip(date) {
        return {
            day: weekdayNames[currentLang][date.getDay()],
            date: `${date.getDate()} ${monthNames[currentLang][date.getMonth()]}`
        };
    }

    function nextAvailableDates(direction, count = 5) {
        const availableWeekdays = Object.keys(bookingRules[direction].schedule).map(Number);
        const dates = [];
        const cursor = new Date();
        cursor.setHours(12, 0, 0, 0);

        for (let offset = 0; offset < 35 && dates.length < count; offset += 1) {
            const candidate = new Date(cursor);
            candidate.setDate(cursor.getDate() + offset);
            if (availableWeekdays.includes(candidate.getDay())) {
                dates.push(candidate);
            }
        }
        return dates;
    }

    function renderTimesForDate(dateValue) {
        bookingTimeChips.innerHTML = "";
        if (!dateValue) return;

        const date = new Date(`${dateValue}T12:00:00`);
        const rule = bookingRules[getSelectedDirection()];
        const times = rule.schedule[date.getDay()] || [];

        if (!times.length) {
            dateValidation.textContent = translations[currentLang].noClassesDate;
            return;
        }

        dateValidation.textContent = "";
        times.forEach((time, index) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="time" value="${time}" ${index === 0 ? "checked" : ""}><span>${time}</span>`;
            bookingTimeChips.appendChild(label);
        });
    }

    function selectRenderedDate(input) {
        const selected = bookingDateChips.querySelector('input[name="date"]:checked');
        if (selected && selected !== input) selected.checked = false;
        input.checked = true;
        customDateRow.classList.remove("visible");
        renderTimesForDate(input.value);
    }

    function renderBookingDates() {
        const direction = getSelectedDirection();
        bookingDateChips.innerHTML = "";
        customDateRow.classList.remove("visible");
        customDate.value = "";
        dateValidation.textContent = "";

        nextAvailableDates(direction).forEach((date, index) => {
            const formatted = formatDateChip(date);
            const value = toLocalIsoDate(date);
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="date" value="${value}" ${index === 0 ? "checked" : ""}><span><b>${formatted.day}</b><small>${formatted.date}</small></span>`;
            const input = label.querySelector("input");
            input.addEventListener("change", () => selectRenderedDate(input));
            bookingDateChips.appendChild(label);
        });

        const calendarLabel = document.createElement("label");
        calendarLabel.className = "calendar-chip-label";
        calendarLabel.innerHTML = `<input type="radio" name="date" value="custom" id="customDateRadio"><span class="calendar-chip"><b>${translations[currentLang].calendarShort}</b><small>${translations[currentLang].calendarSmall}</small></span>`;
        calendarLabel.addEventListener("click", (event) => {
            event.preventDefault();
            const radio = calendarLabel.querySelector("input");
            radio.checked = true;
            customDateRow.classList.add("visible");
            bookingTimeChips.innerHTML = "";
            dateValidation.textContent = "";
            setTimeout(() => {
                customDate.focus();
                if (customDate.showPicker) {
                    try { customDate.showPicker(); } catch (error) { /* browser may require manual tap */ }
                }
            }, 80);
        });
        bookingDateChips.appendChild(calendarLabel);

        const firstDate = bookingDateChips.querySelector('input[name="date"]:checked');
        if (firstDate) renderTimesForDate(firstDate.value);
    }

    function updateAutoTrainer() {
        const rule = bookingRules[getSelectedDirection()];
        bookingTrainer.value = rule.trainer;
        const trainerDisplayNames = {
            "Анна": translations[currentLang].annaName,
            "София": translations[currentLang].sofiaName,
            "Мария": translations[currentLang].mariaName,
            "Елена": translations[currentLang].elenaName
        };
        autoTrainerName.textContent = trainerDisplayNames[rule.trainer] || rule.trainer;
        autoTrainerMeta.textContent = rule.meta[currentLang];
    }

    function refreshBookingLogic() {
        updateAutoTrainer();
        renderBookingDates();
    }

    function openModal() {
        refreshBookingLogic();
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }

    form.querySelectorAll('input[name="direction"]').forEach((input) => {
        input.addEventListener("change", refreshBookingLogic);
    });

    document.querySelectorAll(".open-booking").forEach((button) => {
        button.addEventListener("click", () => {
            let direction = button.dataset.direction;
            const trainer = button.dataset.trainer;

            if (!direction && trainer) {
                direction = Object.entries(bookingRules).find(([, rule]) => rule.trainer === trainer)?.[0];
            }

            if (direction) {
                const directionInput = form.querySelector(`input[name="direction"][value="${direction}"]`);
                if (directionInput) directionInput.checked = true;
            }

            openModal();
        });
    });

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });

    const todayIso = toLocalIsoDate(new Date());
    customDate.min = todayIso;
    customDate.addEventListener("change", () => {
        if (!customDate.value) return;
        const date = new Date(`${customDate.value}T12:00:00`);
        const times = bookingRules[getSelectedDirection()].schedule[date.getDay()] || [];
        const calendarDateTitle = document.getElementById("calendarDateTitle");
        const calendarDateHint = document.getElementById("calendarDateHint");
        const formatted = formatDateChip(date);

        calendarDateTitle.textContent = `${formatted.day}, ${formatted.date}`;
        if (times.length) {
            calendarDateHint.textContent = currentLang === "ru" ? "Дата выбрана — доступное время ниже" : "Date selected — available times are shown below";
            const customRadio = document.getElementById("customDateRadio");
            if (customRadio) customRadio.checked = true;
            renderTimesForDate(customDate.value);
        } else {
            calendarDateHint.textContent = translations[currentLang].noClassesDate;
            bookingTimeChips.innerHTML = "";
            dateValidation.textContent = translations[currentLang].noClassesDate;
        }
    });

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        status.classList.remove("error");
        status.textContent = translations[currentLang].sending;

        const formData = new FormData(form);
        const selectedDate = formData.get("date");
        const finalDate = selectedDate === "custom" ? formData.get("customDate") : selectedDate;

        if (!finalDate || !formData.get("time")) {
            status.classList.add("error");
            status.textContent = currentLang === "ru" ? "Выберите доступные дату и время." : "Please choose an available date and time.";
            return;
        }

        const payload = {
            direction: formData.get("direction"),
            trainer: formData.get("trainer"),
            date: finalDate,
            time: formData.get("time"),
            name: formData.get("name"),
            phone: formData.get("phone"),
            notification_channel: formData.get("notification_channel"),
            notification_contact: formData.get("notification_contact"),
            goal: formData.get("goal"),
            comment: formData.get("comment")
        };

        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            if (!response.ok || !result.ok) throw new Error(result.message || "Request failed");

            status.textContent = translations[currentLang].success;
            if (tg && tg.HapticFeedback) tg.HapticFeedback.notificationOccurred("success");

            setTimeout(() => {
                form.reset();
                form.querySelector('input[name="direction"][value="Reformer Pilates"]').checked = true;
                const emailChannel = form.querySelector('input[name="notification_channel"][value="email"]');
                if (emailChannel) emailChannel.checked = true;
                refreshBookingLogic();
                updateNotificationField();
                closeModal();
                status.textContent = "";
            }, 1400);
        } catch (error) {
            console.error(error);
            status.classList.add("error");
            status.textContent = translations[currentLang].error;
            if (tg && tg.HapticFeedback) tg.HapticFeedback.notificationOccurred("error");
        }
    });

    const consultationModal = document.getElementById("consultationModal");
    const consultationClose = document.getElementById("consultationClose");
    const consultationForm = document.getElementById("consultationForm");
    const consultationStatus = document.getElementById("consultationStatus");

    function openConsultationModal() {
        consultationModal.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeConsultationModal() {
        consultationModal.classList.remove("open");
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".open-consultation").forEach((button) => {
        button.addEventListener("click", openConsultationModal);
    });

    consultationClose.addEventListener("click", closeConsultationModal);

    consultationModal.addEventListener("click", (event) => {
        if (event.target === consultationModal) {
            closeConsultationModal();
        }
    });

    consultationForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        consultationStatus.classList.remove("error");
        consultationStatus.textContent = translations[currentLang].sending;

        const formData = new FormData(consultationForm);

        const payload = {
            requestType: "consultation",
            name: formData.get("name"),
            contact: formData.get("contact"),
            question: formData.get("question")
        };

        try {
            const response = await fetch("/api/consultation", {
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

            consultationStatus.textContent = translations[currentLang].consultationSuccess;

            if (tg && tg.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred("success");
            }

            setTimeout(() => {
                consultationForm.reset();
                closeConsultationModal();
                consultationStatus.textContent = "";
            }, 1400);
        } catch (error) {
            console.error(error);
            consultationStatus.classList.add("error");
            consultationStatus.textContent = translations[currentLang].error;

            if (tg && tg.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred("error");
            }
        }
    });

    setLanguage(currentLang);
});