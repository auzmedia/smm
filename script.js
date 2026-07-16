        (function() {
            // ============ State ============
            let currentLang = localStorage.getItem('lang') || 'ru';
            let currentTheme = localStorage.getItem('theme') || 'light';

            // ============ DOM References ============
            const header = document.getElementById('header');
            const themeToggle = document.getElementById('themeToggle');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileClose = document.getElementById('mobileClose');
            const mobileNav = document.getElementById('mobileNav');
            const overlay = document.getElementById('overlay');
            const langBtns = document.querySelectorAll('.lang-btn');
            const appointmentForm = document.getElementById('appointmentForm');
            const formSuccess = document.getElementById('formSuccess');

            // ============ Theme ============
            function applyTheme(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                const icon = themeToggle.querySelector('i');
                if (theme === 'dark') {
                    icon.className = 'fas fa-sun';
                } else {
                    icon.className = 'fas fa-moon';
                }
                localStorage.setItem('theme', theme);
                currentTheme = theme;
            }

            applyTheme(currentTheme);

            themeToggle.addEventListener('click', function() {
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                applyTheme(newTheme);
            });

            // ============ Language ============
            function getTranslation(path) {
                const keys = path.split('.');
                let result = translations[currentLang];
                for (let i = 0; i < keys.length; i++) {
                    if (result && result[keys[i]] !== undefined) {
                        result = result[keys[i]];
                    } else {
                        return path;
                    }
                }
                return result;
            }

            function updateContent() {
                // Update all elements with data-i18n attribute
                const i18nElements = document.querySelectorAll('[data-i18n]');
                i18nElements.forEach(function(el) {
                    const path = el.getAttribute('data-i18n');
                    const translation = getTranslation(path);
                    if (typeof translation === 'string') {
                        // For select options, only update if it's the default option
                        if (el.tagName === 'OPTION' && el.value === '') {
                            el.textContent = translation;
                        } else if (el.tagName !== 'OPTION') {
                            el.textContent = translation;
                        }
                    }
                });

                // Rebuild dynamic sections
                renderAdvantages();
                renderServices();
                renderTeam();
                renderReviews();
                renderFAQ();
                renderServiceOptions();
            }

            function setLanguage(lang) {
                currentLang = lang;
                localStorage.setItem('lang', lang);
                document.documentElement.lang = lang;

                // Update lang buttons
                langBtns.forEach(function(btn) {
                    if (btn.getAttribute('data-lang') === lang) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });

                updateContent();
            }

            langBtns.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    setLanguage(btn.getAttribute('data-lang'));
                });
            });

            // ============ Dynamic Rendering Functions ============
            function renderAdvantages() {
                const grid = document.getElementById('advantagesGrid');
                const items = translations[currentLang].advantages.items;
                let html = '';
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    html += '<div class="advantage-card animate-on-scroll" style="animation-delay:' + (i * 0.1) + 's">';
                    html += '<div class="advantage-icon"><i class="fas ' + item.icon + '"></i></div>';
                    html += '<h3 class="advantage-title">' + item.title + '</h3>';
                    html += '<p class="advantage-desc">' + item.desc + '</p>';
                    html += '</div>';
                }
                grid.innerHTML = html;
                observeAnimatedElements();
            }

            function renderServices() {
                const grid = document.getElementById('servicesGrid');
                const items = translations[currentLang].services.items;
                let html = '';
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    html += '<div class="service-card animate-on-scroll" style="animation-delay:' + (i * 0.1) + 's">';
                    html += '<div class="service-icon"><i class="fas ' + item.icon + '"></i></div>';
                    html += '<h3 class="service-title">' + item.title + '</h3>';
                    html += '<p class="service-desc">' + item.desc + '</p>';
                    html += '</div>';
                }
                grid.innerHTML = html;
                observeAnimatedElements();
            }

            function renderTeam() {
                const grid = document.getElementById('teamGrid');
                const members = translations[currentLang].team.members;
                let html = '';
                for (let i = 0; i < members.length; i++) {
                    const member = members[i];
                    html += '<div class="team-card animate-on-scroll" style="animation-delay:' + (i * 0.1) + 's">';
                    html += '<div class="team-avatar"><i class="fas fa-user-md"></i></div>';
                    html += '<h3 class="team-name">' + member.name + '</h3>';
                    html += '<p class="team-role">' + member.role + '</p>';
                    html += '<p class="team-exp">' + member.exp + '</p>';
                    html += '</div>';
                }
                grid.innerHTML = html;
                observeAnimatedElements();
            }

            function renderReviews() {
                const grid = document.getElementById('reviewsGrid');
                const items = translations[currentLang].reviews.items;
                let html = '';
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    let starsHtml = '';
                    for (let s = 0; s < item.rating; s++) {
                        starsHtml += '★';
                    }
                    for (let s = item.rating; s < 5; s++) {
                        starsHtml += '☆';
                    }
                    html += '<div class="review-card animate-on-scroll" style="animation-delay:' + (i * 0.1) + 's">';
                    html += '<div class="review-stars">' + starsHtml + '</div>';
                    html += '<p class="review-text">"' + item.text + '"</p>';
                    html += '<p class="review-author">— ' + item.name + '</p>';
                    html += '</div>';
                }
                grid.innerHTML = html;
                observeAnimatedElements();
            }

            function renderFAQ() {
                const list = document.getElementById('faqList');
                const items = translations[currentLang].faq.items;
                let html = '';
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    html += '<div class="faq-item animate-on-scroll">';
                    html += '<div class="faq-question">';
                    html += '<span>' + item.q + '</span>';
                    html += '<i class="fas fa-chevron-down faq-icon"></i>';
                    html += '</div>';
                    html += '<div class="faq-answer">';
                    html += '<p>' + item.a + '</p>';
                    html += '</div>';
                    html += '</div>';
                }
                list.innerHTML = html;

                // Re-attach FAQ click handlers
                const questions = list.querySelectorAll('.faq-question');
                questions.forEach(function(q) {
                    q.addEventListener('click', function() {
                        const item = this.parentElement;
                        const wasActive = item.classList.contains('active');
                        // Close all
                        const allItems = list.querySelectorAll('.faq-item');
                        allItems.forEach(function(el) {
                            el.classList.remove('active');
                        });
                        // Open clicked if wasn't active
                        if (!wasActive) {
                            item.classList.add('active');
                        }
                    });
                });
                observeAnimatedElements();
            }

            function renderServiceOptions() {
                const select = document.getElementById('service');
                const services = translations[currentLang].form.services;
                const defaultOption = select.querySelector('option[value=""]');
                const existingOptions = select.querySelectorAll('option:not([value=""])');
                existingOptions.forEach(function(opt) {
                    opt.remove();
                });

                if (defaultOption) {
                    defaultOption.textContent = getTranslation('form.service');
                }

                for (let i = 0; i < services.length; i++) {
                    const option = document.createElement('option');
                    option.value = services[i];
                    option.textContent = services[i];
                    select.appendChild(option);
                }
            }

            // ============ Scroll Animation Observer ============
            function observeAnimatedElements() {
                const elements = document.querySelectorAll('.animate-on-scroll:not(.observed)');
                const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            entry.target.classList.add('observed');
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.15,
                    rootMargin: '0px 0px -40px 0px'
                });

                elements.forEach(function(el) {
                    observer.observe(el);
                });
            }

            // ============ Header Scroll Effect ============
            function handleScroll() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }

            window.addEventListener('scroll', handleScroll, { passive: true });

            // ============ Mobile Menu ============
            function openMobileMenu() {
                mobileNav.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeMobileMenu() {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            mobileMenuBtn.addEventListener('click', openMobileMenu);
            mobileClose.addEventListener('click', closeMobileMenu);
            overlay.addEventListener('click', closeMobileMenu);

            // Close mobile menu when clicking on links
            const mobileNavLinks = mobileNav.querySelectorAll('a');
            mobileNavLinks.forEach(function(link) {
                link.addEventListener('click', closeMobileMenu);
            });

            // ============ Smooth Scroll for Anchor Links ============
            const allAnchorLinks = document.querySelectorAll('a[href^="#"]');
            allAnchorLinks.forEach(function(anchor) {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const target = document.querySelector(targetId);
                    if (target) {
                        e.preventDefault();
                        const headerHeight = header.offsetHeight + 16;
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // ============ Form Submission ============
            appointmentForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('name').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const service = document.getElementById('service').value;

                if (name && phone && service) {
                    // Simulate submission
                    appointmentForm.style.display = 'none';
                    formSuccess.classList.add('show');

                    // Reset after delay
                    setTimeout(function() {
                        appointmentForm.style.display = 'block';
                        formSuccess.classList.remove('show');
                        appointmentForm.reset();
                    }, 5000);

                    // Here you would send data to server
                    console.log('Form submitted:', { name: name, phone: phone, service: service });
                }
            });

            // ============ Initialize ============
            function init() {
                setLanguage(currentLang);
                updateContent();
                observeAnimatedElements();
                handleScroll();
            }

            // Run on DOM ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                init();
            }
        })();
