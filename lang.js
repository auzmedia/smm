const translations = {
    uz: {
        navAbout: "Haqida", navRooms: "Xonalar", navAmenities: "Qulayliklar", navReviews: "Sharhlar", navContact: "Aloqa",
        heroTitle: "Marjon Hotelga Xush Kelibsiz", heroDesc: "Sizning qulayligingiz - bizning oliy maqsadimiz.", btnBook: "Band qilish",
        statGuests: "Mamnun mijozlar", statRooms: "Shinam xonalar", statYears: "Yillik tajriba",
        whyUs: "Nega bizni tanlashadi?",
        feat1Title: "Markaziy joylashuv", feat1Desc: "Shaharning eng qulay qismida joylashganmiz.",
        feat2Title: "24/7 Xizmat", feat2Desc: "Istalgan vaqtda sizning xizmatingizdamiz.",
        feat3Title: "Yuqori Xavfsizlik", feat3Desc: "Kuzatuv kameralari va xavfsizlik xizmati.",
        roomsTitle: "Xonalar Paketi",
        roomStandard: "Standart", roomStandardDesc: "1 kishilik shinam xona, barcha asosiy qulayliklar bilan.",
        roomVip: "VIP", roomVipDesc: "Keng xona, ajoyib manzara va qo'shimcha xizmatlar.",
        roomPremium: "Premium", roomPremiumDesc: "Eng yuqori darajadagi lyuks xona, shaxsiy xizmat ko'rsatish.",
        amenitiesTitle: "Qulayliklar", am1: "✔️ Bepul Wi-Fi", am2: "✔️ Hovuz va Spa", am3: "✔️ Bepul nonushta", am4: "✔️ Fitnes zal",
        staffTitle: "Bizning Jamoa", staffDesc: "Professional va o'z ishining ustasi bo'lgan jamoamiz sizning xizmatingizda.",
        reviewsTitle: "Mijozlar Fikri", bookTitle: "Xona Buyurtma Qilish",
        formName: "Ism Familiya", formArrive: "Kelish vaqti:", formDepart: "Ketish vaqti:", formComment: "Izoh...", btnSubmit: "Yuborish",
        footerAddressTitle: "Manzil", footerAddress: "O'sh shahri, Markaziy ko'cha 12", footerContactTitle: "Aloqa", footerSocialTitle: "Tarmoqlar"
    },
    ru: {
        navAbout: "О нас", navRooms: "Номера", navAmenities: "Удобства", navReviews: "Отзывы", navContact: "Контакты",
        heroTitle: "Добро пожаловать в Marjon Hotel", heroDesc: "Ваш комфорт - наша главная цель.", btnBook: "Забронировать",
        statGuests: "Довольных клиентов", statRooms: "Уютных номеров", statYears: "Лет опыта",
        whyUs: "Почему выбирают нас?",
        feat1Title: "Центральное расположение", feat1Desc: "Мы находимся в самой удобной части города.",
        feat2Title: "24/7 Обслуживание", feat2Desc: "Мы всегда к вашим услугам.",
        feat3Title: "Высокая безопасность", feat3Desc: "Камеры наблюдения и служба безопасности.",
        roomsTitle: "Пакеты Номеров",
        roomStandard: "Стандарт", roomStandardDesc: "Уютный одноместный номер со всеми удобствами.",
        roomVip: "VIP", roomVipDesc: "Просторный номер, отличный вид и доп. услуги.",
        roomPremium: "Премиум", roomPremiumDesc: "Роскошный номер высшего класса, персональное обслуживание.",
        amenitiesTitle: "Удобства", am1: "✔️ Бесплатный Wi-Fi", am2: "✔️ Бассейн и Спа", am3: "✔️ Бесплатный завтрак", am4: "✔️ Фитнес зал",
        staffTitle: "Наша Команда", staffDesc: "Профессиональная команда мастеров своего дела к вашим услугам.",
        reviewsTitle: "Отзывы Клиентов", bookTitle: "Бронирование Номера",
        formName: "Имя Фамилия", formArrive: "Время заезда:", formDepart: "Время выезда:", formComment: "Комментарий...", btnSubmit: "Отправить",
        footerAddressTitle: "Адрес", footerAddress: "г. Ош, Центральная улица 12", footerContactTitle: "Связь", footerSocialTitle: "Сети"
    },
    en: {
        navAbout: "About", navRooms: "Rooms", navAmenities: "Amenities", navReviews: "Reviews", navContact: "Contact",
        heroTitle: "Welcome to Marjon Hotel", heroDesc: "Your comfort is our ultimate goal.", btnBook: "Book Now",
        statGuests: "Happy Guests", statRooms: "Cozy Rooms", statYears: "Years Experience",
        whyUs: "Why Choose Us?",
        feat1Title: "Central Location", feat1Desc: "Located in the most convenient part of the city.",
        feat2Title: "24/7 Service", feat2Desc: "We are at your service anytime.",
        feat3Title: "High Security", feat3Desc: "Surveillance cameras and security service.",
        roomsTitle: "Room Packages",
        roomStandard: "Standard", roomStandardDesc: "Cozy single room with all basic amenities.",
        roomVip: "VIP", roomVipDesc: "Spacious room, great view and extra services.",
        roomPremium: "Premium", roomPremiumDesc: "Top-class luxury room, personal service.",
        amenitiesTitle: "Amenities", am1: "✔️ Free Wi-Fi", am2: "✔️ Pool & Spa", am3: "✔️ Free Breakfast", am4: "✔️ Fitness Gym",
        staffTitle: "Our Team", staffDesc: "Professional and masterful team is at your service.",
        reviewsTitle: "Customer Reviews", bookTitle: "Room Booking",
        formName: "Full Name", formArrive: "Arrival Time:", formDepart: "Departure Time:", formComment: "Comment...", btnSubmit: "Submit",
        footerAddressTitle: "Address", footerAddress: "Osh city, Central street 12", footerContactTitle: "Contact", footerSocialTitle: "Socials"
    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    localStorage.setItem('hotelLang', lang);
}
