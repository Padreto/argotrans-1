/**
 * Argotrans – Bilingual (BG / EN) i18n
 * All translatable strings. Keys used as data-i18n="key" in HTML.
 * HTML content is safe to use – no user-supplied strings.
 */
(function () {
  'use strict';

  /* ================================================================
     TRANSLATION TABLE
     ================================================================ */
  var T = {

    /* ----------------------------------------------------------------
       SHARED – navigation, footer, banner, modal
       ---------------------------------------------------------------- */
    bg: {

      /* Urgency banner (4× repeated via JS) */
      'banner.content': '&#128680; Пътна Помощ 24/7 &nbsp;|&nbsp; Обади се сега: <a href="tel:+359988885462">0988 885 462</a> &nbsp;|&nbsp; Бързо пристигане &nbsp;|&nbsp; Пътна Помощ София &nbsp;|&nbsp; Пытна Помощ Цени от 45€ &nbsp;|&nbsp; ЧМР застраховка 50 000€ &nbsp;|&nbsp;',

      /* Desktop Nav */
      'nav.home':      'Пытна Помощ',
      'nav.services':  'Услуги',
      'nav.sofia':     'Пытна Помощ София',
      'nav.transport': 'Транспортни Услуги',
      'nav.prices':    'Цени',
      'nav.blog':      'Полезно',
      'nav.contacts':  'Контакти',

      /* Mobile nav */
      'mnav.home':      'Начало',
      'mnav.sofia':     'Пытна Помощ София',
      'mnav.transport': 'Транспортни Услуги',
      'mnav.prices':    'Цени',
      'mnav.blog':      'Полезно',
      'mnav.contacts':  'Контакти',
      'mnav.cta':       'Обадете се сега — 24/7',

      /* Footer */
      'footer.desc':    'Лицензирана пытна помощ в София и страната. Надежден партньор за вашия автомобил, бус или камион.',
      'footer.h.contacts': 'КОНТАКТИ',
      'footer.location': 'София, България',
      'footer.h.services': 'УСЛУГИ',
      'footer.svc1':    'Пытна помощ София',
      'footer.svc2':    'Транспорт до 7 тона',
      'footer.svc3':    'Пытна помощ цени',
      'footer.svc4':    'Продажба на автомобили',
      'footer.copy':    '&copy; 2026 Argotrans. Всички права запазени.',
      'footer.credit':  'Уебсайт изработен от <a href="https://web-fabrika.com/" target="_blank" rel="noopener">WEB-FABRIKA</a>',

      /* Emergency modal */
      'modal.title':   'Нужна ви е пытна помощ сега?',
      'modal.text':    'Екипът ни е на линия 24/7 и пристига до 30 минути в София.',
      'modal.btn':     '<i class="fa-solid fa-phone" aria-hidden="true"></i> ОБАДИ СЕ: 0988 885 462',
      'modal.dismiss': 'Не, благодаря',

      /* ---- HOMEPAGE ---- */
      'hero.status':   'ДЕЖУРЕН ЕКИП — НАЛИЧЕН',
      'hero.h1':       'ПЫТНА ПОМОЩ СОФИЯ',
      'hero.subtitle': 'Бързо и сигурно репатриране до 7 тона.',
      'hero.chip1':    '<i class="fa-solid fa-bolt" aria-hidden="true"></i> до 30 мин',
      'hero.chip2':    'от 45€',
      'hero.chip3':    'ЧМР 50 000€',
      'hero.cta':      '<i class="fa-solid fa-phone" aria-hidden="true"></i> ПОЗВЪНИ ВЕДНАГА — 0988 885 462',
      'hero.feat1':    'Застрахован превоз',
      'hero.feat2':    '30 мин реакция',
      'hero.feat3':    'Цяла България',
      'hero.feat4':    'До 7 тона',

      'svc.eyebrow': 'КАКВО ПРЕДЛАГАМЕ',
      'svc.h2':      'Пытна Помощ и Репатриране в София — Нашите Услуги',
      'svc.c1.h3':   'Пытна помощ със застраховка',
      'svc.c1.p':    'Включена застраховка &ldquo;Отговорност на превозвача&rdquo; до <span class="highlight">50 000€</span> за всяко превозно средство.',
      'svc.c1.link': 'Научи повече &rarr;',
      'svc.c2.h3':   'Репатриране на автомобили',
      'svc.c2.p':    'Бързо преместване на леки и лекотоварни автомобили. <span class="highlight">Професионално отношение</span> към вашия автомобил.',
      'svc.c2.link': 'Научи повече &rarr;',
      'svc.c3.h3':   'Тежкотоварен транспорт',
      'svc.c3.p':    'Специализирана платформа за машини, бусове и камиони до <span class="highlight">7 тона</span>. Сигурно укрепване.',
      'svc.c3.link': 'Научи повече &rarr;',
      'svc.c4.h3':   'Градско и Извънградско',
      'svc.c4.p':    'Покриваме София и цялата пытна мрежа на България. Фиксирани цени за дълги разстояния.',
      'svc.c4.link': 'Вижте цените &rarr;',
      'svc.para':    'Екипът на Арготранс – <a href="/putna-pomosht-sofia/" style="color:var(--yellow);">Пытна помощ София</a> предлага професионална и бърза помощ при аварии на пыта, както в рамките на София, така и в цялата страна и чужбина. Работим денонощно 24/7 и реагираме незабавно при всяка ситуация. Предлагаме репатриране на леки автомобили, джипове, бусове, мотори и специализирана техника до 7 тона. Вижте нашите <a href="/putna-pomosht-ceni/" style="color:var(--yellow);">пытна помощ цени</a> или се <a href="/kontakti/" style="color:var(--yellow);">свържете с нас</a>.',

      'gallery.label': 'НАШАТА РАБОТА',
      'gallery.h2':    'ГАЛЕРИЯ',

      'stats.eyebrow': 'ПОКРИТИЕ И НАДЕЖДНОСТ',
      'stats.h2':      'Пытна Помощ в София и Цяла България — Денонощно 24/7',
      'stats.p':       'Независимо дали сте закъсали на Околовръстното, в центъра на София или на магистрала Тракия, нашият екип пытува към вас.',
      'stats.l1':      'РАБОТНО ВРЕМЕ',
      'stats.l2':      'ПОКРИТИЕ СОФИЯ',
      'stats.l3':      'ЗАСТРАХОВКА',

      'why.eyebrow': 'ЗАЩО НАС?',
      'why.h2':      'Защо да изберете Арготранс за Пытна Помощ в София?',
      'why.p':       'Ние не просто превозваме автомобили – ние решаваме проблеми.',
      'why.c1.h4':   'Експресна реакция',
      'why.c1.p':    'Минимално чакане. До 30 минути в рамките на София.',
      'why.c2.h4':   'Професионални шофьори',
      'why.c2.p':    'Обучен персонал с опит в сложни ситуации.',
      'why.c3.h4':   'Прозрачни цени',
      'why.c3.p':    'Без скрити такси. Знаете колко плащате предварително.',
      'why.cta':     'СВЪРЖЕТЕ СЕ С НАС &rarr;',

      'cta.h2':  'НУЖДА ОТ ПЫТНА ПОМОЩ?',
      'cta.p':   'Не губете време. Екипът на Argotrans е готов да тръгне към вас веднага.',
      'cta.btn': '<i class="fa-solid fa-phone" aria-hidden="true"></i> ПОЗВЪНИ СЕГА — 0988 885 462',
      'cta.meta':'<span>&#10003; 24/7</span><span>&#10003; От 45€</span><span>&#10003; ЧМР Застраховка 50 000€</span>',

      'about.eyebrow': 'За нас',
      'about.h2':      'Арготранс — Денонощна Пытна Помощ в София',
      'about.body':    '<p>Арготранс е специализирана компания за <strong>пытна помощ в София и цяла България</strong>, работеща денонощно — 24 часа в денонощието, 7 дни в седмицата, 365 дни в годината. От години помагаме на автомобилисти, попаднали в нужда — независимо дали е спукана гума, разреден акумулатор, повредена скоростна кутия или тежка катастрофа.</p><p>Нашият екип реагира <strong>до 30 минути</strong> в рамките на София — от Младост до Люлин, от Надежда до Лозенец. Разполагаме с модерен репатрак и специализирана техника за <strong>репатриране на автомобили, джипове, мотори, бусове и техника до 7 тона</strong>. Всяко превозно средство е застраховано по <strong>ЧМР застраховка до 50 000 евро</strong> по време на транспорта — вашето имущество е в сигурни ръце.</p><p>Предлагаме <strong>прозрачни цени без скрити такси</strong> — репатриране на автомобил в София от <strong>45 евро</strong>, на джип от 55 евро. При нужда от извънградски транспорт, таксата е 0.90 евро на километър. Преди да тръгнем, ви даваме точна оферта — без изненади.</p><p>Покриваме <strong>цяла София</strong> — всички квартали и околности, включително Витоша, Бояна, Студентски град и крайградските зони. Работим и по <strong>магистрала Тракия, Хемус, Люлин и Струма</strong>. При нужда осигуряваме пытна помощ в цялата страна.</p><p>За спешна пытна помощ в София, позвънете на <strong><a href="tel:+359988885462" style="color:#ffc800; text-decoration:none;">0988 885 462</a></strong> — денонощно, без почивни дни.</p>',

      'faq.eyebrow': 'Чести въпроси',
      'faq.h2':      'Въпроси и Отговори — Пытна Помощ',
      'faq.q1.h3':   'Колко бързо пристига пытна помощ в София?',
      'faq.q1.p':    'Арготранс реагира до 30 минути в рамките на Sofia. Точното време зависи от трафика и локацията, но се стремим към максимална бързина при всяко повикване.',
      'faq.q2.h3':   'Колко струва пытна помощ в София?',
      'faq.q2.p':    'Цените започват от 45€ за лек автомобил в рамките на София. Джип — от 55€, бус — от 70€. За извънградски транспорт — 0.90€/км. Виж пълните <a href="/putna-pomosht-ceni/" style="color:#ffc800;">цени за пытна помощ</a>.',
      'faq.q3.h3':   'Работи ли Арготранс денонощно и в почивни дни?',
      'faq.q3.p':    'Да. Работим 24/7 — включително събота, неделя и официални празници. Пытната помощ не познава почивен ден.',
      'faq.q4.h3':   'Застраховано ли е превозното ми средство по време на репатрирането?',
      'faq.q4.p':    'Да. Всяко превозно средство е покрито с ЧМР застраховка до 50 000 евро по време на транспорта. Вашият автомобил е в безопасност.',
      'faq.q5.h3':   'Какви видове превозни средства репатрира Арготранс?',
      'faq.q5.p':    'Репатрираме леки автомобили, SUV, джипове, мотори, мотоциклети, бусове и техника до 7 тона. Разполагаме с подходяща техника за всеки тип МПС.',

      'acc.eyebrow': 'Покритие',
      'acc.h2':      'Зони на обслужване',
      'acc.t1':      'Всички квартали в София, които обслужваме',
      'acc.t2':      'Репатриране и пытна помощ в цяла България',
      'acc.t3':      'Ключови думи и социални медии',

      /* ---- SOFIA PAGE ---- */
      'sofia.hero.eyebrow': 'ДЕНОНОЩНА ПЫТНА ПОМОЩ',
      'sofia.hero.h1':      'ПЫТНА ПОМОЩ СОФИЯ',
      'sofia.hero.sub':     'Репатрак 24/7 · от 45€ · ЧМР застраховка 50 000€',
      'sofia.hero.cta':     '<i class="fa-solid fa-phone"></i> 0988 885 462',
      'sofia.about.eyebrow':'За услугата',
      'sofia.about.h2':     'Пытна Помощ в София — Бърза Реакция 24/7',
      'sofia.about.body':   '<p>Арготранс предоставя <strong>денонощна пытна помощ в София</strong> — 24/7, включително събота, неделя и официални празници. Нашият репатрак е готов да тръгне към вас в рамките на <strong>30 минути</strong> от обаждането.</p><p>Обслужваме всички квартали на София — Младост, Люлин, Студентски, Надежда, Лозенец, Витоша и още десетки адреси в града и покрайнините. Всяко пытно средство се репатрира с <strong>ЧМР застраховка до 50 000 евро</strong>.</p>',
      'sofia.faq.eyebrow':  'Чести въпроси',
      'sofia.faq.h2':       'Пытна Помощ София — Въпроси и Отговори',

      /* ---- CENI PAGE ---- */
      'ceni.hero.eyebrow': 'ПРОЗРАЧНИ ЦЕНИ',
      'ceni.hero.h1':      'ПЫТНА ПОМОЩ ЦЕНИ',
      'ceni.hero.sub':     'Фиксирани тарифи · без скрити такси · ЧМР застраховка включена',
      'ceni.table.eyebrow':'ТАРИФИ 2026',
      'ceni.table.h2':     'Цени за Пытна Помощ в София',
      'ceni.calc.eyebrow': 'КАЛКУЛАТОР',
      'ceni.calc.h2':      'Изчисли цената на репатрирането',
      'ceni.calc.label.type':  'Вид превозно средство',
      'ceni.calc.label.dist':  'Разстояние',
      'ceni.calc.label.price': 'Приблизителна цена',
      'ceni.calc.note':    '* Ориентировъчна цена. Точната оферта — при обаждане.',
      'ceni.calc.cta':     'ОБАДИ СЕ ЗА ОФЕРТА',
      'ceni.faq.eyebrow':  'Чести въпроси',
      'ceni.faq.h2':       'Въпроси за Цените на Пытна Помощ',

      /* ---- USLUGI PAGE ---- */
      'uslugi.hero.eyebrow': 'ТРАНСПОРТНИ УСЛУГИ',
      'uslugi.hero.h1':      'РЕПАТРИРАНЕ И ТРАНСПОРТ',
      'uslugi.hero.sub':     'Автомобили, бусове, камиони до 7 тона · 24/7',
      'uslugi.about.eyebrow':'Нашите услуги',
      'uslugi.about.h2':     'Транспортни Услуги — Репатриране в София и Страната',

      /* ---- KONTAKTI PAGE ---- */
      'kontakti.hero.eyebrow': 'СВЪРЖЕТЕ СЕ С НАС',
      'kontakti.hero.h1':      'КОНТАКТИ',
      'kontakti.hero.sub':     'Обадете се или ни пишете — отговаряме 24/7',
      'kontakti.info.h2':      'Свържете се с Арготранс',
      'kontakti.info.phone':   'Телефон',
      'kontakti.info.email':   'Имейл',
      'kontakti.info.hours':   'Работно време',
      'kontakti.info.hours.val':'24/7 — без почивни дни',
      'kontakti.map.h2':       'Намерете ни',

      /* ---- LANDING PAGES (generic shared keys) ---- */
      'lp.how.eyebrow': 'КАК РАБОТИМ',
      'lp.how.h2':      'Как работи Пытна Помощ?',
      'lp.how.s1':      'Обаждате се',
      'lp.how.s1.p':    'Позвъните на 0988 885 462 — отговаряме веднага.',
      'lp.how.s2':      'Потвърждаваме',
      'lp.how.s2.p':    'Даваме ви точна цена и час на пристигане.',
      'lp.how.s3':      'Пристигаме',
      'lp.how.s3.p':    'Репатракът тръгва незабавно — до вас до 30 мин.',
      'lp.how.s4':      'Транспортираме',
      'lp.how.s4.p':    'Превозваме вашия автомобил сигурно и застраховано.',
      'lp.price.eyebrow':'ТАРИФА',
      'lp.cta.h2':      'Нужда от пытна помощ точно сега?',
      'lp.cta.p':       'Не губете ценно време. Нашият екип е готов.',
      'lp.cta.btn':     '<i class="fa-solid fa-phone"></i> ПОЗВЪНИ — 0988 885 462',
      'lp.faq.eyebrow': 'Чести въпроси',

      /* Breadcrumb shared */
      'bc.home': 'Начало',
      'bc.sofia': 'Пытна Помощ София',
    },

    /* ================================================================
       ENGLISH
       ================================================================ */
    en: {

      /* Urgency banner */
      'banner.content': '&#128680; Roadside Assistance 24/7 &nbsp;|&nbsp; Call now: <a href="tel:+359988885462">0988 885 462</a> &nbsp;|&nbsp; Fast arrival &nbsp;|&nbsp; Roadside Assistance Sofia &nbsp;|&nbsp; Prices from &euro;45 &nbsp;|&nbsp; CMR insurance &euro;50,000 &nbsp;|&nbsp;',

      /* Desktop Nav */
      'nav.home':      'Roadside Assistance',
      'nav.services':  'Services',
      'nav.sofia':     'Roadside Assistance Sofia',
      'nav.transport': 'Transport Services',
      'nav.prices':    'Prices',
      'nav.blog':      'Useful',
      'nav.contacts':  'Contacts',

      /* Mobile nav */
      'mnav.home':      'Home',
      'mnav.sofia':     'Roadside Assistance Sofia',
      'mnav.transport': 'Transport Services',
      'mnav.prices':    'Prices',
      'mnav.blog':      'Useful',
      'mnav.contacts':  'Contacts',
      'mnav.cta':       'Call us now — 24/7',

      /* Footer */
      'footer.desc':    'Licensed roadside assistance in Sofia and across Bulgaria. Trusted partner for your car, van or truck.',
      'footer.h.contacts': 'CONTACTS',
      'footer.location': 'Sofia, Bulgaria',
      'footer.h.services': 'SERVICES',
      'footer.svc1':    'Roadside Assistance Sofia',
      'footer.svc2':    'Transport up to 7 tonnes',
      'footer.svc3':    'Roadside Assistance Prices',
      'footer.svc4':    'Car Sales',
      'footer.copy':    '&copy; 2026 Argotrans. All rights reserved.',
      'footer.credit':  'Website by <a href="https://web-fabrika.com/" target="_blank" rel="noopener">WEB-FABRIKA</a>',

      /* Emergency modal */
      'modal.title':   'Do you need roadside assistance right now?',
      'modal.text':    'Our team is available 24/7 and arrives within 30 minutes in Sofia.',
      'modal.btn':     '<i class="fa-solid fa-phone" aria-hidden="true"></i> CALL: 0988 885 462',
      'modal.dismiss': 'No, thank you',

      /* ---- HOMEPAGE ---- */
      'hero.status':   'DUTY TEAM — AVAILABLE',
      'hero.h1':       'ROADSIDE ASSISTANCE SOFIA',
      'hero.subtitle': 'Fast and secure towing up to 7 tonnes.',
      'hero.chip1':    '<i class="fa-solid fa-bolt" aria-hidden="true"></i> within 30 min',
      'hero.chip2':    'from &euro;45',
      'hero.chip3':    'CMR &euro;50,000',
      'hero.cta':      '<i class="fa-solid fa-phone" aria-hidden="true"></i> CALL NOW — 0988 885 462',
      'hero.feat1':    'Insured transport',
      'hero.feat2':    '30 min response',
      'hero.feat3':    'All of Bulgaria',
      'hero.feat4':    'Up to 7 tonnes',

      'svc.eyebrow': 'WHAT WE OFFER',
      'svc.h2':      'Roadside Assistance &amp; Towing in Sofia — Our Services',
      'svc.c1.h3':   'Roadside Assistance with Insurance',
      'svc.c1.p':    'Carrier&rsquo;s liability insurance up to <span class="highlight">&euro;50,000</span> included for every vehicle.',
      'svc.c1.link': 'Learn more &rarr;',
      'svc.c2.h3':   'Vehicle Towing',
      'svc.c2.p':    'Fast relocation of cars and light commercial vehicles. <span class="highlight">Professional care</span> for your vehicle.',
      'svc.c2.link': 'Learn more &rarr;',
      'svc.c3.h3':   'Heavy Transport',
      'svc.c3.p':    'Specialised platform for machinery, vans and trucks up to <span class="highlight">7 tonnes</span>. Secure fastening.',
      'svc.c3.link': 'Learn more &rarr;',
      'svc.c4.h3':   'City and Cross-Country',
      'svc.c4.p':    'We cover Sofia and the entire road network of Bulgaria. Fixed prices for long distances.',
      'svc.c4.link': 'View prices &rarr;',
      'svc.para':    'The Argotrans team – <a href="/putna-pomosht-sofia/" style="color:var(--yellow);">Roadside Assistance Sofia</a> offers professional and prompt help during roadside breakdowns, both within Sofia and across Bulgaria and abroad. We operate 24/7 and respond immediately to any situation. We offer towing of cars, SUVs, vans, motorcycles and specialised equipment up to 7 tonnes. See our <a href="/putna-pomosht-ceni/" style="color:var(--yellow);">roadside assistance prices</a> or <a href="/kontakti/" style="color:var(--yellow);">contact us</a>.',

      'gallery.label': 'OUR WORK',
      'gallery.h2':    'GALLERY',

      'stats.eyebrow': 'COVERAGE AND RELIABILITY',
      'stats.h2':      'Roadside Assistance in Sofia and All of Bulgaria — 24/7',
      'stats.p':       'Whether you\'re stuck on the Ring Road, in the centre of Sofia or on the Trakia Motorway, our team is on the way.',
      'stats.l1':      'WORKING HOURS',
      'stats.l2':      'SOFIA COVERAGE',
      'stats.l3':      'INSURANCE',

      'why.eyebrow': 'WHY US?',
      'why.h2':      'Why Choose Argotrans for Roadside Assistance in Sofia?',
      'why.p':       'We don\'t just tow cars — we solve problems.',
      'why.c1.h4':   'Express Response',
      'why.c1.p':    'Minimal waiting. Within 30 minutes in Sofia.',
      'why.c2.h4':   'Professional Drivers',
      'why.c2.p':    'Trained staff experienced in complex situations.',
      'why.c3.h4':   'Transparent Prices',
      'why.c3.p':    'No hidden fees. You know the price upfront.',
      'why.cta':     'CONTACT US &rarr;',

      'cta.h2':  'NEED ROADSIDE ASSISTANCE?',
      'cta.p':   'Don\'t waste time. The Argotrans team is ready to come to you immediately.',
      'cta.btn': '<i class="fa-solid fa-phone" aria-hidden="true"></i> CALL NOW — 0988 885 462',
      'cta.meta':'<span>&#10003; 24/7</span><span>&#10003; From &euro;45</span><span>&#10003; CMR Insurance &euro;50,000</span>',

      'about.eyebrow': 'About Us',
      'about.h2':      'Argotrans — 24/7 Roadside Assistance in Sofia',
      'about.body':    '<p>Argotrans is a specialist company for <strong>roadside assistance in Sofia and across Bulgaria</strong>, operating around the clock — 24 hours a day, 7 days a week, 365 days a year. For years we have been helping drivers in need — whether it\'s a flat tyre, a dead battery, a broken gearbox or a serious accident.</p><p>Our team responds <strong>within 30 minutes</strong> anywhere in Sofia — from Mladost to Lyulin, from Nadezhda to Lozenets. We have a modern tow truck and specialised equipment for <strong>towing cars, SUVs, motorcycles, vans and machinery up to 7 tonnes</strong>. Every vehicle is covered by <strong>CMR insurance up to €50,000</strong> during transport — your property is in safe hands.</p><p>We offer <strong>transparent prices with no hidden fees</strong> — car towing in Sofia from <strong>€45</strong>, SUV from €55. For out-of-town transport the rate is €0.90 per kilometre. Before we set off, we give you an exact quote — no surprises.</p><p>We cover <strong>all of Sofia</strong> — every neighbourhood, including Vitosha, Boyana, Studentski Grad and the surrounding areas. We also operate on the <strong>Trakia, Hemus, Lyulin and Struma motorways</strong>. When needed, we provide roadside assistance anywhere in the country.</p><p>For urgent roadside assistance in Sofia, call <strong><a href="tel:+359988885462" style="color:#ffc800; text-decoration:none;">0988 885 462</a></strong> — round the clock, every day of the year.</p>',

      'faq.eyebrow': 'Frequently Asked Questions',
      'faq.h2':      'Q&amp;A — Roadside Assistance',
      'faq.q1.h3':   'How quickly does roadside assistance arrive in Sofia?',
      'faq.q1.p':    'Argotrans responds within 30 minutes anywhere in Sofia. The exact time depends on traffic and your location, but we always aim for maximum speed.',
      'faq.q2.h3':   'How much does roadside assistance in Sofia cost?',
      'faq.q2.p':    'Prices start from &euro;45 for a standard car within Sofia. SUV — from &euro;55, van — from &euro;70. Out-of-town — &euro;0.90/km. See the full <a href="/putna-pomosht-ceni/" style="color:#ffc800;">roadside assistance price list</a>.',
      'faq.q3.h3':   'Does Argotrans operate 24/7, including weekends?',
      'faq.q3.p':    'Yes. We operate 24/7 — including Saturdays, Sundays and public holidays. Roadside emergencies don\'t take days off.',
      'faq.q4.h3':   'Is my vehicle insured during towing?',
      'faq.q4.p':    'Yes. Every vehicle is covered by CMR insurance up to €50,000 during transport. Your car is in safe hands.',
      'faq.q5.h3':   'What types of vehicles does Argotrans tow?',
      'faq.q5.p':    'We tow standard cars, SUVs, motorcycles, scooters, vans and machinery up to 7 tonnes. We have the right equipment for every type of vehicle.',

      'acc.eyebrow': 'Coverage',
      'acc.h2':      'Service Areas',
      'acc.t1':      'All Sofia neighbourhoods we serve',
      'acc.t2':      'Towing and roadside assistance across Bulgaria',
      'acc.t3':      'Keywords and social media',

      /* ---- SOFIA PAGE ---- */
      'sofia.hero.eyebrow': '24/7 ROADSIDE ASSISTANCE',
      'sofia.hero.h1':      'ROADSIDE ASSISTANCE SOFIA',
      'sofia.hero.sub':     'Tow truck 24/7 · from €45 · CMR insurance €50,000',
      'sofia.hero.cta':     '<i class="fa-solid fa-phone"></i> 0988 885 462',
      'sofia.about.eyebrow':'About the service',
      'sofia.about.h2':     'Roadside Assistance in Sofia — Fast Response 24/7',
      'sofia.about.body':   '<p>Argotrans provides <strong>24/7 roadside assistance in Sofia</strong> — including Saturdays, Sundays and public holidays. Our tow truck is ready to reach you within <strong>30 minutes</strong> of your call.</p><p>We serve all neighbourhoods in Sofia — Mladost, Lyulin, Studentski, Nadezhda, Lozenets, Vitosha and dozens of other addresses in the city and surroundings. Every vehicle is towed with <strong>CMR insurance up to €50,000</strong>.</p>',
      'sofia.faq.eyebrow':  'Frequently Asked Questions',
      'sofia.faq.h2':       'Roadside Assistance Sofia — Q&amp;A',

      /* ---- CENI PAGE ---- */
      'ceni.hero.eyebrow': 'TRANSPARENT PRICES',
      'ceni.hero.h1':      'ROADSIDE ASSISTANCE PRICES',
      'ceni.hero.sub':     'Fixed rates · no hidden fees · CMR insurance included',
      'ceni.table.eyebrow':'RATES 2026',
      'ceni.table.h2':     'Roadside Assistance Prices in Sofia',
      'ceni.calc.eyebrow': 'CALCULATOR',
      'ceni.calc.h2':      'Calculate the towing price',
      'ceni.calc.label.type':  'Vehicle type',
      'ceni.calc.label.dist':  'Distance',
      'ceni.calc.label.price': 'Estimated price',
      'ceni.calc.note':    '* Indicative price. Exact quote on request.',
      'ceni.calc.cta':     'CALL FOR A QUOTE',
      'ceni.faq.eyebrow':  'Frequently Asked Questions',
      'ceni.faq.h2':       'Questions about Roadside Assistance Prices',

      /* ---- USLUGI PAGE ---- */
      'uslugi.hero.eyebrow': 'TRANSPORT SERVICES',
      'uslugi.hero.h1':      'TOWING AND TRANSPORT',
      'uslugi.hero.sub':     'Cars, vans, trucks up to 7 tonnes · 24/7',
      'uslugi.about.eyebrow':'Our services',
      'uslugi.about.h2':     'Transport Services — Towing in Sofia and Nationwide',

      /* ---- KONTAKTI PAGE ---- */
      'kontakti.hero.eyebrow': 'GET IN TOUCH',
      'kontakti.hero.h1':      'CONTACTS',
      'kontakti.hero.sub':     'Call or write to us — we respond 24/7',
      'kontakti.info.h2':      'Contact Argotrans',
      'kontakti.info.phone':   'Phone',
      'kontakti.info.email':   'Email',
      'kontakti.info.hours':   'Working hours',
      'kontakti.info.hours.val':'24/7 — every day of the year',
      'kontakti.map.h2':       'Find us',

      /* ---- LANDING PAGES ---- */
      'lp.how.eyebrow': 'HOW IT WORKS',
      'lp.how.h2':      'How does Roadside Assistance work?',
      'lp.how.s1':      'You call',
      'lp.how.s1.p':    'Call 0988 885 462 — we answer immediately.',
      'lp.how.s2':      'We confirm',
      'lp.how.s2.p':    'We give you an exact price and estimated arrival time.',
      'lp.how.s3':      'We arrive',
      'lp.how.s3.p':    'The tow truck sets off immediately — at your location within 30 min.',
      'lp.how.s4':      'We transport',
      'lp.how.s4.p':    'We transport your vehicle safely and with insurance.',
      'lp.price.eyebrow':'TARIFF',
      'lp.cta.h2':      'Need roadside assistance right now?',
      'lp.cta.p':       'Don\'t waste precious time. Our team is ready.',
      'lp.cta.btn':     '<i class="fa-solid fa-phone"></i> CALL — 0988 885 462',
      'lp.faq.eyebrow': 'Frequently Asked Questions',

      /* Breadcrumb shared */
      'bc.home': 'Home',
      'bc.sofia': 'Roadside Assistance Sofia',
    }
  };

  /* ================================================================
     ENGINE
     ================================================================ */

  /**
   * Rebuild the urgency-banner track (4 repeats for the CSS marquee).
   */
  function rebuildBanner(lang) {
    var track = document.querySelector('.urgency-banner-track');
    if (!track) return;
    var content = T[lang]['banner.content'] || '';
    track.innerHTML = content + content + content + content;
  }

  /**
   * Apply all data-i18n translations for the given language.
   */
  function applyLang(lang) {
    if (!T[lang]) return;
    document.documentElement.lang = lang;
    localStorage.setItem('argolang', lang);

    /* Toggle button label */
    var btn = document.getElementById('langSwitch');
    if (btn) btn.textContent = lang === 'bg' ? 'EN' : 'BG';

    /* Translate all tagged elements */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[lang][key] !== undefined) {
        el.innerHTML = T[lang][key];
      }
    });

    rebuildBanner(lang);

    /* Page <title> */
    var titleKey = 'page.title.' + (document.body.dataset.page || '');
    if (T[lang][titleKey]) document.title = T[lang][titleKey];

    /* Meta description */
    var descKey = 'page.desc.' + (document.body.dataset.page || '');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && T[lang][descKey]) metaDesc.content = T[lang][descKey];
  }

  function init() {
    var savedLang = localStorage.getItem('argolang') || 'bg';
    var btn = document.getElementById('langSwitch');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem('argolang') || 'bg';
        applyLang(current === 'bg' ? 'en' : 'bg');
      });
    }
    applyLang(savedLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
