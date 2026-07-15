// ========== CONFIGURATION ==========
// Faqat Google Apps Script URL'si kerak, tokenlar backendda saqlanadi
const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby0rcK4AaaZdyXZP6VJPWThPy4s42DDd-X7fPPbcEhJLTfPbz4i2AfQSoRuNmoqEA-Gkw/exec';

// Buyurtma hisoblagichi
let orderCounter = 1;

// ========== DOM ELEMENTS ==========
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initTheme();
    initLanguage();
    initNavigation();
    initSwiper();
    initStatsCounter();
    initBookingForm();
    initSmoothScroll();
    
    // Set current year in footer
    document.querySelector('.footer__bottom p').innerHTML = 
        `&copy; ${new Date().getFullYear()} Marjon Hotel. <span data-lang="footer_rights">Barcha huquqlar himoyalangan.</span>`;
});

// ========== THEME MANAGEMENT ==========
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(icon, savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(icon, newTheme);
    });
}

function updateThemeIcon(icon, theme) {
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// ========== LANGUAGE MANAGEMENT ==========
function initLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('language') || 'uz';
    
    // Set active language
    setLanguage(savedLang);
    
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === savedLang) {
            btn.classList.add('active');
        }
        
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
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// ========== NAVIGATION ==========
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.className = navList.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            navToggle.querySelector('i').className = 'fas fa-bars';
        });
    });
    
    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========== SWIPER INITIALIZATION ==========
function initSwiper() {
    // Hero Swiper
    new Swiper('.hero-swiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
    
    // Reviews Swiper
    new Swiper('.reviews-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

// ========== STATISTICS COUNTER ==========
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat__number');
    let animated = false;
    
    function animateStats() {
        if (animated) return;
        
        stats.forEach(stat => {
            const target = parseInt(stat.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
        
        animated = true;
    }
    
    // Intersection Observer for stats
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// ========== BOOKING FORM ==========
function initBookingForm() {
    const form = document.getElementById('booking-form');
    const roomButtons = document.querySelectorAll('.book-room');
    
    // Pre-fill room type when clicking on room cards
    roomButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const roomType = btn.dataset.room;
            const roomSelect = document.getElementById('room-type');
            roomSelect.value = roomType;
            
            // Scroll to booking form
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            roomType: document.getElementById('room-type').value,
            checkIn: document.getElementById('check-in').value,
            checkOut: document.getElementById('check-out').value,
            comment: document.getElementById('comment').value
        };
        
        // Validate form
        if (!validateForm(formData)) {
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Yuborilmoqda...';
        submitBtn.disabled = true;
        
        try {
            // Send to Google Apps Script (hamma narsa backendda bajariladi)
            const result = await sendToBackend(formData);
            
            if (result.success) {
                showNotification('success', 'Buyurtmangiz qabul qilindi! Tez orada bog\'lanamiz.');
                form.reset();
                orderCounter++;
            } else {
                throw new Error(result.error || 'Xatolik yuz berdi');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('error', 'Xatolik yuz berdi. Qaytadan urinib ko\'ring yoki telefon orqali bog\'laning.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

function validateForm(data) {
    if (!data.name || data.name.trim().length < 3) {
        showNotification('error', 'Iltimos, ism familiyangizni to\'liq kiriting');
        return false;
    }
    
    const phoneRegex = /^\+998[0-9]{9}$/;
    if (!phoneRegex.test(data.phone)) {
        showNotification('error', 'Telefon raqam +998901234567 formatida bo\'lishi kerak');
        return false;
    }
    
    if (!data.checkIn || !data.checkOut) {
        showNotification('error', 'Iltimos, sana va vaqtni tanlang');
        return false;
    }
    
    const checkInDate = new Date(data.checkIn);
    const checkOutDate = new Date(data.checkOut);
    
    if (checkOutDate <= checkInDate) {
        showNotification('error', 'Ketish sanasi kelish sanasidan keyin bo\'lishi kerak');
        return false;
    }
    
    return true;
}

// ========== BACKEND COMMUNICATION ==========
async function sendToBackend(data) {
    const formattedData = {
        orderId: `#${orderCounter}`,
        name: data.name,
        phone: data.phone,
        roomType: data.roomType,
        checkIn: formatDateTime(data.checkIn),
        checkOut: formatDateTime(data.checkOut),
        comment: data.comment || 'Izoh qoldirilmagan',
        timestamp: new Date().toISOString()
    };
    
    try {
        const response = await fetch(APP_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedData)
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Backend error:', error);
        throw error;
    }
}

function formatDateTime(dateTimeStr) {
    if (!dateTimeStr) return '';
    const date = new Date(dateTimeStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} - ${hours}:${minutes}`;
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(type, message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== ADDITIONAL ANIMATIONS ==========
function initScrollAnimations() {
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
}

// Initialize additional animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initScrollAnimations, 100);
});
