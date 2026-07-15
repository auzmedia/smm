
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TEMA SOZLAMALARI (DARK/LIGHT) ---
    const themeBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('marjonTheme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('marjonTheme', newTheme);
        themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // --- 2. TIL SOZLAMALARI ---
    const langSelect = document.getElementById('langSwitcher');
    const currentLang = localStorage.getItem('marjonLang') || 'uz';
    langSelect.value = currentLang;
    updateLanguage(currentLang);

    langSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });

    // --- 3. HERO SLIDER ANIMATSIYASI ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 6000); // Har 6 soniyada almashadi

    // --- 4. SCROLL ANIMATSIYA (Intersection Observer) ---
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Faqat 1 marta ishlaydi
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });

    // --- 5. GOOGLE APPS SCRIPT BILAN BOG'LANISH (FORM SUBMIT) ---
    const form = document.getElementById('hotelForm');
    const msgDiv = document.getElementById('formMsg');
    
    // YUQORIDAGI APPS SCRIPT URL MANZILINI SHU YERGA QO'YING
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxaZ4955BWrKABon9S4s30FqtUHyh-XOtD9XKyIFAAQqLQ2uayYjPtnnRBRB287UE369g/exec';

    function formatDateTime(dateString) {
        const d = new Date(dateString);
        return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()} - ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ Yuborilmoqda...";
        submitBtn.style.opacity = '0.7';

        const payload = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            room: document.getElementById('roomType').value,
            arrive: formatDateTime(document.getElementById('arriveDate').value),
            depart: formatDateTime(document.getElementById('departDate').value),
            comment: document.getElementById('comment').value || "Izoh yo'q"
        };

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            msgDiv.style.color = "#10b981"; // Yashil rang
            msgDiv.style.marginTop = "15px";
            msgDiv.textContent = currentLang === 'uz' ? "✓ Buyurtma muvaffaqiyatli yuborildi!" : (currentLang === 'ru' ? "✓ Заявка успешно отправлена!" : "✓ Order sent successfully!");
            form.reset();
        } catch (error) {
            msgDiv.style.color = "#ef4444"; // Qizil rang
            msgDiv.style.marginTop = "15px";
            msgDiv.textContent = "Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.";
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
            setTimeout(() => { msgDiv.textContent = ""; }, 5000);
        }
    });
});
