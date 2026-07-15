document.addEventListener('DOMContentLoaded', () => {
    // TEMA SOZLAMALARI
    const themeBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('hotelTheme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('hotelTheme', newTheme);
        themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // TIL SOZLAMALARI
    const langSelect = document.getElementById('langSwitcher');
    const currentLang = localStorage.getItem('hotelLang') || 'uz';
    langSelect.value = currentLang;
    updateLanguage(currentLang);

    langSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });

    // HERO SLIDER
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);

    // FORM SUBMIT VA TELEGRAMGA YUBORISH
    const form = document.getElementById('bookingForm');
    const msgDiv = document.getElementById('formMsg');
    
    // GOOGLE APPS SCRIPT WEB APP URL (Quyidagi 5-qadamdagi havolani shu yerga qo'yasiz)
    const SCRIPT_URL = 'https://script.google.com/macros/s/SIZNING_URL_MANZILINGIZ/exec';

    // Sana formatini DD/MM/YYYY - HH:MM ko'rinishiga keltirish
    function formatDate(dateString) {
        const d = new Date(dateString);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        const hrs = String(d.getHours()).padStart(2, '0');
        const mins = String(d.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} - ${hrs}:${mins}`;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = "Yuborilmoqda...";

        const payload = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            room: document.getElementById('roomType').value,
            arrive: formatDate(document.getElementById('arriveDate').value),
            depart: formatDate(document.getElementById('departDate').value),
            comment: document.getElementById('comment').value || "Yo'q"
        };

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Muhim: CORS muammosini oldini oladi
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            msgDiv.style.color = "green";
            msgDiv.textContent = "Buyurtma muvaffaqiyatli yuborildi!";
            form.reset();
        } catch (error) {
            msgDiv.style.color = "red";
            msgDiv.textContent = "Xatolik yuz berdi. Qaytadan urinib ko'ring.";
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = translations[langSelect.value].btnSubmit;
        }
    });
});
