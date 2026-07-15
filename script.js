// Google Apps Script URL
const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxyrr3UWsPypFPNtHZfcmCgyBF9dQvYhv6RpMvfRRf4K8hgjAMjIt36yotwD-StAQmB3Q/exec';

let orderCounter = 1;

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNavigation();
    initSwiper();
    initStatsCounter();
    initBookingForm();
    initSmoothScroll();
});

// ========== THEME ==========
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// ========== LANGUAGE ==========
function initLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('language') || 'uz';
    setLanguage(savedLang);
    
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === savedLang) btn.classList.add('active');
        
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('language', lang);
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.dataset.lang;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}

// ========== NAVIGATION ==========
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('.nav__list');
    
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        navToggle.querySelector('i').className = navList.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
    
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            navToggle.querySelector('i').className = 'fas fa-bars';
        });
    });
}

// ========== SWIPER ==========
function initSwiper() {
    new Swiper('.hero-swiper', {
        slidesPerView: 1, loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        effect: 'fade', fadeEffect: { crossFade: true }
    });
    
    new Swiper('.reviews-swiper', {
        slidesPerView: 1, spaceBetween: 30, loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
}

// ========== STATS COUNTER ==========
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat__number');
    let animated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                stats.forEach(stat => {
                    const target = parseInt(stat.dataset.target);
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const update = () => {
                        current += step;
                        if (current < target) {
                            stat.textContent = Math.floor(current);
                            requestAnimationFrame(update);
                        } else {
                            stat.textContent = target;
                        }
                    };
                    update();
                });
            }
        });
    });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) observer.observe(statsSection);
}

// ========== BOOKING FORM ==========
function initBookingForm() {
    const form = document.getElementById('booking-form');
    
    // Room card buttons
    document.querySelectorAll('.book-room').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('room-type').value = btn.dataset.room;
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Form submit
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const roomType = document.getElementById('room-type').value;
        const checkIn = document.getElementById('check-in').value;
        const checkOut = document.getElementById('check-out').value;
        const comment = document.getElementById('comment').value.trim();
        
        // Validation
        if (!name || name.length < 3) {
            showMessage('Iltimos, ism familiyangizni to\'liq kiriting!', 'error');
            return;
        }
        
        const phoneRegex = /^\+998[0-9]{9}$/;
        if (!phoneRegex.test(phone)) {
            showMessage('Telefon raqam +998901234567 formatida bo\'lishi kerak!', 'error');
            return;
        }
        
        if (!roomType) {
            showMessage('Iltimos, xona turini tanlang!', 'error');
            return;
        }
        
        if (!checkIn || !checkOut) {
            showMessage('Iltimos, sana va vaqtni tanlang!', 'error');
            return;
        }
        
        if (new Date(checkOut) <= new Date(checkIn)) {
            showMessage('Ketish sanasi kelish sanasidan keyin bo\'lishi kerak!', 'error');
            return;
        }
        
        // Show loading
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Yuborilmoqda...';
        submitBtn.disabled = true;
        
        try {
            // Format date
            const formatDate = (dateStr) => {
                if (!dateStr) return '';
                const d = new Date(dateStr);
                const day = String(d.getDate()).padStart(2, '0');
                const month = String(d.getMonth() + 1).padStart(2, '0');
                const year = d.getFullYear();
                const hours = String(d.getHours()).padStart(2, '0');
                const minutes = String(d.getMinutes()).padStart(2, '0');
                return `${day}/${month}/${year} - ${hours}:${minutes}`;
            };
            
            // Prepare data
            const data = {
                orderId: `#${orderCounter}`,
                name: name,
                phone: phone,
                roomType: roomType,
                checkIn: formatDate(checkIn),
                checkOut: formatDate(checkOut),
                comment: comment || 'Izoh qoldirilmagan',
                timestamp: new Date().toISOString()
            };
            
            console.log('📤 Yuborilmoqda:', data);
            
            // Send to Google Apps Script
            const response = await fetch(APP_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            });
            
            console.log('✅ Javob:', response);
            
            showMessage('✅ Buyurtmangiz qabul qilindi! Tez orada bog\'lanamiz.', 'success');
            form.reset();
            orderCounter++;
            
        } catch (error) {
            console.error('❌ Xatolik:', error);
            showMessage('❌ Xatolik yuz berdi. Iltimos, telefon orqali bog\'laning: +998 90 123 45 67', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ========== MESSAGE DISPLAY ==========
function showMessage(message, type) {
    const msgDiv = document.getElementById('form-message');
    msgDiv.textContent = message;
    msgDiv.style.display = 'block';
    msgDiv.style.background = type === 'success' ? '#4CAF50' : '#f44336';
    msgDiv.style.color = 'white';
    
    setTimeout(() => {
        msgDiv.style.display = 'none';
    }, 5000);
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const elements = document.querySelectorAll('.room-card, .why-card, .amenity-card, .staff-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }, 100);
});
