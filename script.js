document.addEventListener('DOMContentLoaded', () => {
    // Translation dictionary
    const i18nData = {
        ru: {
            nav_home: 'Главная',
            nav_github: 'Github',
            hero_title: 'Путешествуйте по презентации<br><span class="text-gradient">с картой слайдов</span>',
            hero_subtitle: 'Сервис, который автоматически создаёт слайд содержания с сеткой кликабельных миниатюр слайдов. Добавляет обратные ссылки с каждого слайда на содержание.',
            hero_btn_products: 'Перейти к продуктам',
            hero_btn_contact: 'Контакты',
            slide_1: 'Слайд 1',
            slide_2: 'Слайд 2',
            slide_3: 'Слайд 3',
            slide_4: 'Слайд 4',
            features_title: 'Возможности',
            feature_1_title: 'Расположение карты слайдов',
            feature_1_desc: 'Автоматически расставляет миниатюры в сетку для оптимального использования места.',
            feature_2_title: 'Перемещение по презентации',
            feature_2_desc: 'Создаёт гиперссылки в каждой миниатюре к нужному слайду.',
            feature_3_title: 'Обратная навигация',
            feature_3_desc: 'Добавляет обратные гиперссылки на содержание в формате [№ слайда]/[кол-во слайдов].',
            products_title: 'Наши решения',
            product_1_title: 'Расширение Google Slides',
            product_1_desc: 'Простое кроссплатформенное решение для презентаций Google Slides. Выберите слайды и создайте интерактивные карты за считанные секунды.',
            product_2_title: 'Windows приложение',
            product_2_desc: 'C# WPF .NET Framework приложение для Windows. Для .pptx презентаций с возможностью предпросмотра слайда.',
            contact_title: 'Связаться с нами',
            contact_desc: 'Есть вопросы, обратная связь или хотите внести вклад?',
            contact_email_label: 'Почта (Нажмите, чтобы скопировать)',
            contact_email_copied: 'Скопировано!',
            contact_github_label: 'GitHub профиль',
            footer_rights: '© 2026 Presentation Slide Map Maker. Все права защищены.',
            footer_privacy: 'Политика конфиденциальности',

            // Privacy Policy Page
            privacy_back: '<i class="fa-solid fa-arrow-left"></i> На главную',
            privacy_title: 'Политика конфиденциальности',
            privacy_effective: '<strong>Дата вступления в силу:</strong> 31.07.2026',
            privacy_intro: '<strong>Presentation Slide Map Maker</strong> — это расширение для Google Slides, которое обрабатывает только ту презентацию, которую вы явно выберете для использования с расширением.',
            privacy_s1_title: '1. Доступ к информации',
            privacy_s1_p1: 'Расширение получает доступ только к текущей открытой презентации Google Slides для обеспечения своей функциональности.',
            privacy_s1_p2: 'Оно не имеет доступа к другим файлам Google Диска, Gmail, контактам, календарю или любым другим сервисам Google.',
            privacy_s2_title: '2. Использование информации',
            privacy_s2_p1: 'Данные презентации используются исключительно для выполнения запрошенных вами действий.',
            privacy_s2_p2: 'Расширение не использует ваши данные в рекламных, аналитических, профилирующих или маркетинговых целях.',
            privacy_s3_title: '3. Хранение и передача данных',
            privacy_s3_p1: 'Расширение не сохраняет содержимое вашей презентации на постоянной основе.',
            privacy_s3_p2: 'Расширение не передает данные презентации на внешние серверы и не передает ваши данные третьим лицам.',
            privacy_s3_p3: 'Вся обработка выполняется с использованием Google Apps Script в инфраструктуре Google.',
            privacy_s4_title: '4. Изменения',
            privacy_s4_p1: 'Эта Политика конфиденциальности может время от времени обновляться. Любые изменения будут опубликованы на этой странице.',
            privacy_s5_title: '5. Контакты',
            privacy_s5_p1: 'Если у вас есть вопросы по поводу этой Политики конфиденциальности, пожалуйста, свяжитесь с нами:'
        },
        en: {
            nav_home: 'Home',
            nav_github: 'Github',
            hero_title: 'Navigate Your Presentations<br><span class="text-gradient">With Slide Map</span>',
            hero_subtitle: 'A service that automatically generates a Table of Contents slide with a grid of clickable slide thumbnails. Adds backlinks from every slide to the table of contents.',
            hero_btn_products: 'Explore Products',
            hero_btn_contact: 'Contact Us',
            slide_1: 'Slide 1',
            slide_2: 'Slide 2',
            slide_3: 'Slide 3',
            slide_4: 'Slide 4',
            features_title: 'Features',
            feature_1_title: 'Slide Map Layout',
            feature_1_desc: 'Automatically positions thumbnails in a grid to optimize slide space.',
            feature_2_title: 'Presentation Navigation',
            feature_2_desc: 'Creates hyperlinks inside each thumbnail to the corresponding slide.',
            feature_3_title: 'Backlink Navigation',
            feature_3_desc: 'Adds backlink hyperlinks to the table of contents formatted as [Slide №]/[Total Slides].',
            products_title: 'Our Solutions',
            product_1_title: 'Google Slides Add-on',
            product_1_desc: 'Simple cross-platform solution for Google Slides presentations. Select slides and build interactive maps in seconds.',
            product_2_title: 'Windows Application',
            product_2_desc: 'C# WPF .NET Framework app for Windows. Built for .pptx presentations with slide preview capabilities.',
            contact_title: 'Get in Touch',
            contact_desc: 'Have questions, feedback, or want to contribute?',
            contact_email_label: 'Email (Click to copy)',
            contact_email_copied: 'Copied!',
            contact_github_label: 'GitHub Profile',
            footer_rights: '© 2026 Presentation Slide Map Maker. All rights reserved.',
            footer_privacy: 'Privacy Policy',

            // Privacy Policy Page
            privacy_back: '<i class="fa-solid fa-arrow-left"></i> Back to Main Page',
            privacy_title: 'Privacy Policy',
            privacy_effective: '<strong>Effective Date:</strong> July 31, 2026',
            privacy_intro: '<strong>Presentation Slide Map Maker</strong> is a Google Slides add-on that processes only the presentation you explicitly choose to use with the add-on.',
            privacy_s1_title: '1. Information We Access',
            privacy_s1_p1: 'The add-on accesses only the currently opened Google Slides presentation in order to provide its functionality.',
            privacy_s1_p2: 'It does not access other Google Drive files, Gmail, Contacts, Calendar, or any other Google services.',
            privacy_s2_title: '2. How We Use Information',
            privacy_s2_p1: 'Presentation data is used only to perform the actions requested by you.',
            privacy_s2_p2: 'The add-on does not use your data for advertising, analytics, profiling, or marketing purposes.',
            privacy_s3_title: '3. Data Storage and Sharing',
            privacy_s3_p1: 'The add-on does not permanently store your presentation content.',
            privacy_s3_p2: 'The add-on does not transmit presentation data to external servers and does not share your data with third parties.',
            privacy_s3_p3: 'All processing is performed using Google Apps Script within Google\'s infrastructure.',
            privacy_s4_title: '4. Changes',
            privacy_s4_p1: 'This Privacy Policy may be updated from time to time. Any changes will be published on this page.',
            privacy_s5_title: '5. Contact',
            privacy_s5_p1: 'If you have any questions about this Privacy Policy, please contact:'
        }
    };

    function setLanguage(lang) {
        if (!i18nData[lang]) return;
        localStorage.setItem('psmm_lang', lang);
        document.documentElement.lang = lang;

        // Update active class on language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
        });

        // Translate elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18nData[lang][key]) {
                el.innerHTML = i18nData[lang][key];
            }
        });
    }

    // Attach click handlers to lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang-btn');
            setLanguage(selectedLang);
        });
    });

    // Determine initial language (saved preference -> browser language -> default 'ru')
    const savedLang = localStorage.getItem('psmm_lang');
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase().startsWith('en') ? 'en' : 'ru';
    const initialLang = savedLang || browserLang;
    setLanguage(initialLang);

    // Reveal on scroll functionality
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for background orbs
    const orbs = document.querySelectorAll('.glow-orb');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = index === 0 ? 30 : -40;
            const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
            const yOffset = (window.innerHeight / 2 - e.pageY) / speed;
            
            orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Click to Copy Email
    const emailCard = document.getElementById('emailCard');
    const emailAddress = document.getElementById('emailAddress');
    const copyTooltip = document.getElementById('copyTooltip');

    if (emailCard && emailAddress && copyTooltip) {
        emailCard.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(emailAddress.textContent);
                copyTooltip.classList.add('show');
                
                // Remove tooltip after 2 seconds
                setTimeout(() => {
                    copyTooltip.classList.remove('show');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    }

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const zoomableImages = document.querySelectorAll('.zoomable');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg) {
        zoomableImages.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'block';
                lightboxImg.src = img.src;
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = 'none';
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        // Close when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});
