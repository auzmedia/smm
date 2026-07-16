// lang.js - Многоязычный пакет для стоматологии "Галерея Улыбок"
const translations = {
    ru: {
        nav: {
            about: 'О клинике',
            services: 'Услуги',
            team: 'Специалисты',
            reviews: 'Отзывы',
            faq: 'FAQ',
            contacts: 'Контакты'
        },
        hero: {
            title: 'Галерея Улыбок',
            subtitle: 'Премиальная стоматология в центре города. Современное оборудование, опытные врачи и индивидуальный подход к каждому пациенту.',
            cta: 'Записаться на приём',
            badge: '⭐ 4.9 рейтинг на 2ГИС'
        },
        advantages: {
            title: 'Почему выбирают нас',
            items: [
                { icon: 'fa-microscope', title: 'Современное оборудование', desc: 'Используем передовые технологии и материалы мировых брендов' },
                { icon: 'fa-user-md', title: 'Опытные врачи', desc: 'Специалисты с опытом более 10 лет и международной практикой' },
                { icon: 'fa-shield-alt', title: 'Безопасность', desc: 'Полная стерилизация инструментов по стандартам ГОСТ' },
                { icon: 'fa-clock', title: 'Без очередей', desc: 'Приём строго по записи в удобное для вас время' },
                { icon: 'fa-smile', title: 'Комфорт', desc: 'Безболезненное лечение с использованием современной анестезии' },
                { icon: 'fa-star', title: 'Гарантия', desc: 'Предоставляем гарантию на все виды работ до 5 лет' }
            ]
        },
        services: {
            title: 'Наши услуги',
            items: [
                { icon: 'fa-tooth', title: 'Терапия', desc: 'Лечение кариеса, пульпита, реставрация зубов' },
                { icon: 'fa-teeth', title: 'Имплантация', desc: 'Восстановление зубов любой сложности под ключ' },
                { icon: 'fa-teeth-open', title: 'Протезирование', desc: 'Коронки, мосты, съёмные протезы' },
                { icon: 'fa-smile-beam', title: 'Эстетика', desc: 'Отбеливание, виниры, художественная реставрация' },
                { icon: 'fa-x-ray', title: 'Диагностика', desc: 'Компьютерная томография, панорамный снимок' },
                { icon: 'fa-child', title: 'Детская стоматология', desc: 'Лечение и профилактика для самых маленьких' }
            ]
        },
        team: {
            title: 'Наша команда',
            members: [
                { name: 'Иванова Анна Сергеевна', role: 'Главный врач, стоматолог-терапевт', exp: '15 лет опыта' },
                { name: 'Петров Дмитрий Александрович', role: 'Хирург-имплантолог', exp: '12 лет опыта' },
                { name: 'Смирнова Елена Викторовна', role: 'Стоматолог-ортопед', exp: '10 лет опыта' },
                { name: 'Козлов Артём Игоревич', role: 'Детский стоматолог', exp: '8 лет опыта' }
            ]
        },
        certificates: {
            title: 'Наши сертификаты и лицензии'
        },
        reviews: {
            title: 'Отзывы наших пациентов',
            items: [
                { name: 'Марина К.', text: 'Отличная клиника! Лечила здесь кариес и ставила коронку. Всё прошло безболезненно и качественно. Рекомендую!', rating: 5 },
                { name: 'Александр П.', text: 'Делал имплантацию у Петрова Д.А. Профессионал своего дела. Через месяц уже поставили коронку, всё идеально.', rating: 5 },
                { name: 'Ольга С.', text: 'Приводила ребёнка на приём к детскому стоматологу. Врач нашёл подход, дочка не боялась. Спасибо!', rating: 5 }
            ]
        },
        faq: {
            title: 'Часто задаваемые вопросы',
            items: [
                { q: 'Больно ли лечить зубы?', a: 'Мы используем современные анестетики, которые делают лечение полностью безболезненным. Для комфорта пациентов также доступна седация.' },
                { q: 'Сколько стоит консультация?', a: 'Первичная консультация и составление плана лечения — бесплатно при дальнейшем лечении в нашей клинике.' },
                { q: 'Есть ли рассрочка?', a: 'Да, мы предлагаем беспроцентную рассрочку на 6-12 месяцев через банки-партнёры.' },
                { q: 'Какие гарантии на работу?', a: 'Мы предоставляем гарантию до 5 лет на все виды работ. При соблюдении рекомендаций врача.' }
            ]
        },
        form: {
            title: 'Запишитесь на приём',
            subtitle: 'Оставьте заявку, и мы перезвоним вам в течение 5 минут',
            name: 'Ваше имя',
            phone: 'Ваш телефон',
            service: 'Выберите услугу',
            services: ['Терапия', 'Имплантация', 'Протезирование', 'Эстетика', 'Диагностика', 'Детская стоматология'],
            button: 'Записаться',
            success: 'Спасибо! Мы свяжемся с вами в ближайшее время.'
        },
        contacts: {
            title: 'Контакты',
            address: 'г. Москва, ул. Примерная, д. 123',
            phone: '+7 (495) 123-45-67',
            email: 'info@smile-gallery.ru',
            hours: 'Пн-Сб: 9:00 - 21:00',
            hours_detail: 'Воскресенье: 10:00 - 18:00'
        },
        footer: {
            copyright: '© 2024 Галерея Улыбок. Все права защищены.',
            privacy: 'Политика конфиденциальности'
        }
    },
    en: {
        nav: {
            about: 'About',
            services: 'Services',
            team: 'Specialists',
            reviews: 'Reviews',
            faq: 'FAQ',
            contacts: 'Contacts'
        },
        hero: {
            title: 'Smile Gallery',
            subtitle: 'Premium dentistry in the city center. Modern equipment, experienced doctors and individual approach to each patient.',
            cta: 'Book an appointment',
            badge: '⭐ 4.9 rating on 2GIS'
        },
        advantages: {
            title: 'Why choose us',
            items: [
                { icon: 'fa-microscope', title: 'Modern Equipment', desc: 'We use advanced technologies and materials from world brands' },
                { icon: 'fa-user-md', title: 'Experienced Doctors', desc: 'Specialists with over 10 years of experience and international practice' },
                { icon: 'fa-shield-alt', title: 'Safety', desc: 'Complete sterilization of instruments according to GOST standards' },
                { icon: 'fa-clock', title: 'No Queues', desc: 'Appointments strictly by appointment at your convenience' },
                { icon: 'fa-smile', title: 'Comfort', desc: 'Painless treatment using modern anesthesia' },
                { icon: 'fa-star', title: 'Warranty', desc: 'We provide a warranty for all types of work up to 5 years' }
            ]
        },
        services: {
            title: 'Our Services',
            items: [
                { icon: 'fa-tooth', title: 'Therapy', desc: 'Treatment of caries, pulpitis, dental restoration' },
                { icon: 'fa-teeth', title: 'Implantation', desc: 'Dental restoration of any complexity turnkey' },
                { icon: 'fa-teeth-open', title: 'Prosthetics', desc: 'Crowns, bridges, removable dentures' },
                { icon: 'fa-smile-beam', title: 'Aesthetics', desc: 'Whitening, veneers, artistic restoration' },
                { icon: 'fa-x-ray', title: 'Diagnostics', desc: 'Computed tomography, panoramic X-ray' },
                { icon: 'fa-child', title: 'Pediatric Dentistry', desc: 'Treatment and prevention for the youngest' }
            ]
        },
        team: {
            title: 'Our Team',
            members: [
                { name: 'Anna Ivanova', role: 'Chief Physician, Dentist-Therapist', exp: '15 years experience' },
                { name: 'Dmitry Petrov', role: 'Surgeon-Implantologist', exp: '12 years experience' },
                { name: 'Elena Smirnova', role: 'Dentist-Orthopedist', exp: '10 years experience' },
                { name: 'Artem Kozlov', role: 'Pediatric Dentist', exp: '8 years experience' }
            ]
        },
        certificates: {
            title: 'Our Certificates and Licenses'
        },
        reviews: {
            title: 'Patient Reviews',
            items: [
                { name: 'Marina K.', text: 'Excellent clinic! Treated caries and got a crown here. Everything was painless and high quality. I recommend!', rating: 5 },
                { name: 'Alexander P.', text: 'Had implantation done by Dr. Petrov. A true professional. Got a crown in a month, everything is perfect.', rating: 5 },
                { name: 'Olga S.', text: 'Brought my child to a pediatric dentist. The doctor found an approach, my daughter was not afraid. Thank you!', rating: 5 }
            ]
        },
        faq: {
            title: 'Frequently Asked Questions',
            items: [
                { q: 'Is dental treatment painful?', a: 'We use modern anesthetics that make treatment completely painless. Sedation is also available for patient comfort.' },
                { q: 'How much does a consultation cost?', a: 'Initial consultation and treatment plan are free with subsequent treatment at our clinic.' },
                { q: 'Is installment plan available?', a: 'Yes, we offer interest-free installments for 6-12 months through partner banks.' },
                { q: 'What warranties do you provide?', a: 'We provide a warranty up to 5 years for all types of work, subject to following the doctor\'s recommendations.' }
            ]
        },
        form: {
            title: 'Book an Appointment',
            subtitle: 'Leave a request and we will call you back within 5 minutes',
            name: 'Your name',
            phone: 'Your phone',
            service: 'Choose a service',
            services: ['Therapy', 'Implantation', 'Prosthetics', 'Aesthetics', 'Diagnostics', 'Pediatric Dentistry'],
            button: 'Book Now',
            success: 'Thank you! We will contact you shortly.'
        },
        contacts: {
            title: 'Contacts',
            address: 'Moscow, Primernaya St., 123',
            phone: '+7 (495) 123-45-67',
            email: 'info@smile-gallery.ru',
            hours: 'Mon-Sat: 9:00 - 21:00',
            hours_detail: 'Sunday: 10:00 - 18:00'
        },
        footer: {
            copyright: '© 2024 Smile Gallery. All rights reserved.',
            privacy: 'Privacy Policy'
        }
    },
    uz: {
        nav: {
            about: 'Klinika haqida',
            services: 'Xizmatlar',
            team: 'Mutaxassislar',
            reviews: 'Sharhlar',
            faq: 'FAQ',
            contacts: 'Kontaktlar'
        },
        hero: {
            title: 'Tabassum Galereyasi',
            subtitle: 'Shahar markazida premium stomatologiya. Zamonaviy uskunalar, tajribali shifokorlar va har bir bemorga individual yondashuv.',
            cta: 'Qabulga yozilish',
            badge: '⭐ 2GISda 4.9 reyting'
        },
        advantages: {
            title: 'Nega bizni tanlashadi',
            items: [
                { icon: 'fa-microscope', title: 'Zamonaviy uskunalar', desc: 'Jahon brendlarining ilg\'or texnologiyalari va materiallaridan foydalanamiz' },
                { icon: 'fa-user-md', title: 'Tajribali shifokorlar', desc: '10 yildan ortiq tajribaga ega va xalqaro amaliyotli mutaxassislar' },
                { icon: 'fa-shield-alt', title: 'Xavfsizlik', desc: 'GOST standartlari bo\'yicha asboblarni to\'liq sterilizatsiya qilish' },
                { icon: 'fa-clock', title: 'Navbatsiz', desc: 'Siz uchun qulay vaqtda qat\'iy yozuv bo\'yicha qabul' },
                { icon: 'fa-smile', title: 'Konfor', desc: 'Zamonaviy anesteziya yordamida og\'riqsiz davolash' },
                { icon: 'fa-star', title: 'Kafolat', desc: 'Barcha ish turlariga 5 yilgacha kafolat beramiz' }
            ]
        },
        services: {
            title: 'Bizning xizmatlar',
            items: [
                { icon: 'fa-tooth', title: 'Terapiya', desc: 'Kariyes, pulpit davolash, tish restavratsiyasi' },
                { icon: 'fa-teeth', title: 'Implantatsiya', desc: 'Har qanday murakkablikdagi tish tiklash kalit taslim' },
                { icon: 'fa-teeth-open', title: 'Protezlash', desc: 'Koronkalar, ko\'priklar, yechiladigan protezlar' },
                { icon: 'fa-smile-beam', title: 'Estetika', desc: 'Oqartirish, vinirlar, badiiy restavratsiya' },
                { icon: 'fa-x-ray', title: 'Diagnostika', desc: 'Kompyuter tomografiyasi, panoramali rentgen' },
                { icon: 'fa-child', title: 'Bolalar stomatologiyasi', desc: 'Eng kichiklar uchun davolash va profilaktika' }
            ]
        },
        team: {
            title: 'Bizning jamoa',
            members: [
                { name: 'Anna Ivanova', role: 'Bosh shifokor, stomatolog-terapevt', exp: '15 yillik tajriba' },
                { name: 'Dmitriy Petrov', role: 'Xirurg-implantolog', exp: '12 yillik tajriba' },
                { name: 'Yelena Smirnova', role: 'Stomatolog-ortoped', exp: '10 yillik tajriba' },
                { name: 'Artyom Kozlov', role: 'Bolalar stomatologi', exp: '8 yillik tajriba' }
            ]
        },
        certificates: {
            title: 'Sertifikatlar va litsenziyalar'
        },
        reviews: {
            title: 'Bemorlarimizning sharhlari',
            items: [
                { name: 'Marina K.', text: 'Ajoyib klinika! Bu yerda kariyes davoladim va koronka qo\'ydirdim. Hammasi og\'riqsiz va sifatli o\'tdi. Tavsiya qilaman!', rating: 5 },
                { name: 'Aleksandr P.', text: 'Petrov D.A.da implantatsiya qildirdim. O\'z ishining professionallari. Bir oydan keyin koronka qo\'yishdi, hammasi a\'lo.', rating: 5 },
                { name: 'Olga S.', text: 'Bolani bolalar stomatologiga olib keldim. Shifokor yondashuv topdi, qizim qo\'rqmadi. Rahmat!', rating: 5 }
            ]
        },
        faq: {
            title: 'Ko\'p beriladigan savollar',
            items: [
                { q: 'Tish davolash og\'riqlimi?', a: 'Biz zamonaviy anestetiklardan foydalanamiz, ular davolanishni butunlay og\'riqsiz qiladi. Bemorlarning qulayligi uchun sedatsiya ham mavjud.' },
                { q: 'Konsultatsiya qancha turadi?', a: 'Birlamchi konsultatsiya va davolash rejasi – klinikamizda keyingi davolanishda bepul.' },
                { q: 'To\'lovni bo\'lib to\'lash mumkinmi?', a: 'Ha, biz hamkor banklar orqali 6-12 oyga foizsiz bo\'lib to\'lashni taklif qilamiz.' },
                { q: 'Ishga qanday kafolatlar berasiz?', a: 'Shifokor tavsiyalariga rioya qilgan holda, barcha ish turlariga 5 yilgacha kafolat beramiz.' }
            ]
        },
        form: {
            title: 'Qabulga yoziling',
            subtitle: 'So\'rov qoldiring, va biz sizga 5 daqiqa ichida qo\'ng\'iroq qilamiz',
            name: 'Ismingiz',
            phone: 'Telefoningiz',
            service: 'Xizmatni tanlang',
            services: ['Terapiya', 'Implantatsiya', 'Protezlash', 'Estetika', 'Diagnostika', 'Bolalar stomatologiyasi'],
            button: 'Yozilish',
            success: 'Rahmat! Biz yaqin vaqt ichida siz bilan bog\'lanamiz.'
        },
        contacts: {
            title: 'Kontaktlar',
            address: 'Moskva sh., Primernaya ko\'ch., 123',
            phone: '+7 (495) 123-45-67',
            email: 'info@smile-gallery.ru',
            hours: 'Dush-Shan: 9:00 - 21:00',
            hours_detail: 'Yakshanba: 10:00 - 18:00'
        },
        footer: {
            copyright: '© 2024 Tabassum Galereyasi. Barcha huquqlar himoyalangan.',
            privacy: 'Maxfiylik siyosati'
        }
    }
};
