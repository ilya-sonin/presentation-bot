import { Answer } from "./types/answer";

import { get_file_path_from_src } from "./common/files";

export const start_message: Answer = new Answer(
    [
        {
            type: "text",
            content: `Привет👋

Я бот, который проведет экскурсию в мир качественного парфюма от компании Essens!

Нажимай скорей на кнопку!`,
        },
        { type: "video", content: get_file_path_from_src("assets/video/about_company.MP4") },
    ],
    [{ text: 'Начать презентацию ▶️', fixed: false, callback_name: "start" }]
);


export const presentation: Answer[] = [
    // go_to@0 - "главное меню..."
    new Answer(
        [{
            type: "text", content: `✅|Это главное меню  
Привет! Давай знакомиться 
Меня зовут Юлия Сонина, я лидер компании Essens, мой телеграм @ulason
Давай посмотрим, чем я смогу тебе помочь! 
Итак!
😎Я могу тебе рассказать о компании, продукции, маркетинге, о том, как и сколько ты сможешь зарабатывать!
➡️Выбирай с чего начнем:` }],
        [
            { text: "😎О компании😎", fixed: false, callback_name: "go_to@1" },
            { text: "💅О продукции💄", fixed: false, callback_name: "go_to@6" },
            { text: "🤝О системе бизнеса🤝", fixed: false, callback_name: "go_to@11" },
            { text: "🛍О маркетинге компании🛍", fixed: false, callback_name: "go_to@15" },
            { text: "📊Причины присоединиться к нашей команде📊", fixed: false, callback_name: "go_to@16" },
            { text: "❤️Я хочу стать партнером❤️", fixed: false, callback_name: "final" },
            { text: "💬Связаться со мной💬", fixed: false, callback_name: "to_social_network@https://t.me/ulason" },
        ]
    ),

    // go_to@1 - "О компании"
    new Answer(
        [
            { type: "video", content: get_file_path_from_src("assets/video/about_company.MP4") },
            {
                type: "text", content: `✅ ESSENS - в настоящее время одна из наиболее динамично развивающихся компаний в Европе, России и СНГ.     
➡️ Компания основана в Чехии в 2011 году, в России официально работает с 2015 года.

Представлена компания ESSENS  в более чем в 20 странах: 
Великобритании🇬🇧, Германии🇩🇪, Австрии🇦🇹, Чехии🇨🇿, Словакии🇸🇰, Италии🇮🇹, Румынии🇷🇴, Венгрии🇭🇺, Испании🇪🇸, Хорватии🇭🇷, Словении🇸🇮, Греции🇬🇷,Сербии🇷🇸, на Кипре🇨🇾, в Болгарии🇧🇬, во Франции 🇫🇷, Казахстан 🇰🇿, Узбекистан 🇺🇿,Сенегал 🇸🇳 , Босния и Герцеговина 🇧🇦
Головной офис находится в Чехии - г.Брно.

❤️ ESSENS -это интернет-магазин на рынке КРАСОТЫ и ЗДОРОВЬЯ премиум класса!                                       
❤️ESSENS -это парфюм в стилистике известных Брендов!
❤️ ESSENS - это инновационные технологии в косметических продуктах, продуктах питания и БАДах!
❤️ESSENS - это реальный источник для получения дохода!` },
        ],
        [
            { text: "🗺Где производится продукция", fixed: false, callback_name: "go_to@2" },
            { text: "🤝Партнеры компании", fixed: false, callback_name: "go_to@3" },
            { text: "✨Преимущества компании", fixed: false, callback_name: "go_to@4" },
            { text: "👔Кому подойдет сотрудничество с компанией", fixed: false, callback_name: "go_to@5" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@2 - "О компании - Где производится продукция"
    new Answer(
        [
            { type: "image", content: get_file_path_from_src("assets/image/gde-proizdvoditsa-1.jpg") },
            {
                type: "text", content: `✅ Завод SELUZ - крупнейший мировой поставщик парфюмерных эссенций в Европе!

❤️ Парфюм производят в стилистике известных Брендов с концентрацией эссенции 20%, с раскрытием аромата в 3 уровня нот! `}
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@1" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@3 - "О компании - Партнеры компании"
    new Answer(
        [
            {
                type: "text", content: `😎Сильные партнеры - для сильной компании!

✅ERTE COSMETICS - один из ведущих производителей парфюмерии, туалетной воды и дезодорантов.

✅INGREDIA s.r.o это известный чешский производитель пищевых добавок и косметики из молозива. Компания была основана в 2006 году с целью предоставить клиентам ESSENS продукцию высокого качества.

✅ DOCHEMA company Ltd - основанная в 2003 году чешская компания. Основными направлениями деятельности компании являются производство моющих средств, промышленных обезжиривателей и супер концентратов, а также парфюмерия.

✅ K2pharm  -компания в Чехии с многолетним опытом в области исследований и разработок технологии лекарственных форм во главе с главным технологом - фармацевтом  Миланом Крайчиком!` },
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@1" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@4 - "О компании - Преимущества компании"
    new Answer(
        [
            {
                type: "gallery", contents: [
                    get_file_path_from_src("assets/image/preimuchectva-companii-1.jpg"),
                    get_file_path_from_src("assets/image/preimuchectva-companii-2.jpg"),
                    get_file_path_from_src("assets/image/preimuchectva-companii-3.jpg"),
                ]
            },
            {
                type: "text", content: `Уверена тебе понравиться:

✅ бесплатная регистрация
✅ скидка 30-50% на продукцию
✅ + кэшбек до 17% от покупок
✅ выгодные бонусы для продавцов
✅ личный интернет-магазин
✅ международный маркетинг-план
✅ нет обязательного ЛТО 
✅ три легких и доступных Автопрограммы
✅ офис от компании
✅ путешествия за счет компании
✅ премиальный % от мирового товарооборота компании
✅ щедрые условия для лидеров
✅ уникальная система продвижения
✅ выплаты по маркетинг плану до 43%`
            },
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@1" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@5 - "О продукции - Кому подойдет сотрудничество с компанией"
    new Answer(
        [
            {
                type: "gallery", contents: [
                    get_file_path_from_src("assets/image/comy-podoidet-sotrudnichestvo-1.jpg"),
                    get_file_path_from_src("assets/image/comy-podoidet-sotrudnichestvo-2.jpg"),
                    get_file_path_from_src("assets/image/comy-podoidet-sotrudnichestvo-3.jpg"),
                    get_file_path_from_src("assets/image/comy-podoidet-sotrudnichestvo-4.jpg"),
                ]
            },
            { type: "text", content: "На самом деле работать у нас может каждый!💪" }
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@1" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@6 - "О продукции"
    new Answer(
        [
            {
                type: "text", content: `Флагман продукции - номерная парфюмерия (номерные духи), а также широкий ассортимент сопутствующих парфюмерных продуктов, уходовой косметики и биологически активных добавок, а так же шикарная декоративная косметика премиум класса ☝️👍
Вся продукция сертифицирована и соответствует евростандартам качества!` }
        ],
        [
            { text: "💎Ассортимент ароматов", fixed: false, callback_name: "go_to@7" },
            { text: "🌺Как выглядят флаконы", fixed: false, callback_name: "go_to@8" },
            { text: "📜Сертификация", fixed: false, callback_name: "go_to@9" },
            { text: "🛒Другая продукция Essens", fixed: false, callback_name: "go_to@10" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@7 - "О продукции - Ассортимент ароматов"
    new Answer(
        [
            {
                type: "gallery", contents: [
                    get_file_path_from_src("assets/image/assortiment-aromatov-flayer-1.jpg"),
                    get_file_path_from_src("assets/image/assortiment-aromatov-flayer-2.jpg")
                ]
            },
            {
                type: "text", content: `ESSENS - это самостоятельный бренд духов, наши технологи были воодушевлены ароматами мировых брендов и сделали свою эксклюзивную линейку номерного парфюма.

Для удобства выбора духов, разработан флаер, как ориентир в выборе направления аромата.

Выбраны популярные направления нот, но при этом наши духи более качественно открываются - в 3 ноты. 
❗️Более стойкие, так как содержат 20% аромаэссенций. 
❗️Доступные, так как доставляется на прямую от производителя (без посредников). 
❗️Безопасные, так как не содержат фталатов и других опасных веществ. 
❗️Европейское качество, потверждающее сертификацией. ❗️Производятся на всемирно известных заводах.` }
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@6" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@8 - "О продукции - Как выглядят флаконы"
    new Answer(
        [
            { type: "video", content: get_file_path_from_src("assets/video/about_product.MP4") }
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@6" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@9 - "О продукции - Сертификация"
    new Answer(
        [
            { type: "image", content: get_file_path_from_src("assets/image/certs.jpg") },
            {
                type: "text", content: `Сертификация «Честный знак», действующая на территории Российской Федерации
✅Концентрация парфюмерной эсенции 20%
✅Без фталатов, парабенов
✅Продукция компании не тестируется на животных
✅Европейские сертификаты качества GMP и HACCP
✅Российская сертификация «Честный знак»

Вы можете быть на 100% уверены в качестве нашего парфюма!` }
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@6" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@10 - "О продукции - Другая продукция Essens"
    new Answer(
        [
            {
                type: "gallery", contents: [
                    get_file_path_from_src("assets/image/another-product-1.jpg"),
                    get_file_path_from_src("assets/image/another-product-2.jpg"),
                    get_file_path_from_src("assets/image/another-product-3.jpg"),
                    get_file_path_from_src("assets/image/another-product-4.jpg"),
                    get_file_path_from_src("assets/image/another-product-5.jpg"),
                    get_file_path_from_src("assets/image/another-product-6.jpg"),
                    get_file_path_from_src("assets/image/another-product-7.jpg"),
                    get_file_path_from_src("assets/image/another-product-8.jpg"),
                ]
            },
            { type: "text", content: "-----------------------------------" }
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@6" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@11 - "О системе бизнеса"
    new Answer(
        [
            {
                type: "text", content: `Система нашего бизнеса уникальна и она включает в себя:

✅пошаговое обучение и сопровождение каждого партнера, доведение до результата!
✅ рабочий чат, где всегда можно получить помощь и поддержку!
✅ бесплатные проекты:
        для новичков Easy Start 
        проект по включению в бизнес Puzzle 🧩 game
✅ готовые алгоритмы для работы, скрипты диалогов, эффективные инструменты
✅ использование сочетания работы и "на земле" и в онлайне - подойдет для любого человека!

Для каждого человека - это огромные перспективы и возможности!` }
        ],
        [
            { text: "📈Система нашей работы", fixed: false, callback_name: "go_to@12" },
            { text: "💰О доходах с продаж", fixed: false, callback_name: "go_to@13" },
            { text: "💎Постоянно действующие Бонусы и Акции", fixed: false, callback_name: "go_to@14" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@12 - "О системе бизнеса - Система нашей работы"
    new Answer(
        [
            {
                type: "text",
                content: `1️⃣ Собираем заказ от клиентов
2️⃣ Клиенты переводят вам 100% предоплату за духи
3️⃣ Оформляем заказ на сайте через личный кабинет.
Разница между ценой клиента и закупки сразу остаётся у вас
4️⃣ Ждём доставку. Получаем заказы ТК СДЭК, Почтой или Озон. Среднее время доставки дней 5.
5️⃣ Заказ пришёл - раздаём своим довольным клиентам.
6️⃣ Если клиент из другого города, делаем доставку сразу на адрес клиента

Мы НЕ закупаем продукцию за свои деньги, нет ежемесячных планов❗`
            }
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@11" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@13 - "О системе бизнеса -  О доходах с продаж"
    new Answer(
        [
            { type: "image", content: get_file_path_from_src("assets/image/o-dochodah-s-prodash.jpg") },
            {
                type: "text", content: `Рассмотрим выручку, которую ты будешь получать на примере продажи флакона духов классической коллекции.
К продаже 50мл - 2200р 

Наша цена закупки 1545 руб., то есть выручка с продажи одного флакона духов 655 руб., сразу же на руки!

При активных продажах, а именно, если продадите за 1 календарный месяц более 5ти флаконов духов, то за каждый флакон вам ещё вернётся кешбек 190 р за каждый флакон духов.

Итого выручка 655+190=845 р с каждого флакона` }
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@11" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@14 - "О системе бизнеса -  Постоянно действующие Бонусы и Акции"
    new Answer(
        [
            { type: "image", content: get_file_path_from_src("assets/image/postoaino-deistvuischii-aksii-2.jpg") },
            { type: "text", content: `В настоящее время в компании действует дополнительная система поощрения активных менеджеров - это акция 5+1, 9+2, 12+3, т. е. 1, 2 или даже 3 флакона Вы можете получить в подарок 📦` },
            {
                type: "gallery", contents: [
                    get_file_path_from_src("assets/image/postoaino-deistvuischii-aksii-1.jpg"),
                    get_file_path_from_src("assets/image/postoaino-deistvuischii-aksii-3.jpg"),
                    get_file_path_from_src("assets/image/postoaino-deistvuischii-aksii-4.jpg"),
                ]
            },
            { type: "text", content: `Таким образом вы уже на начальных этапах имеете возможность зарабатывать 20-30 и более тысяч рублей, все зависит от того, сколько времени вы готовы уделять бизнесу.` }
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@11" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@15 - "О маркетинге компании"
    new Answer(
        [
            { type: "image", content: get_file_path_from_src("assets/image/o-marketinge-label.jpg") },
            {
                type: "text", content: `Активно проявляя себя, при желании, вы сможете стать руководителем группы продаж в своём городе и работать вместе с командой единомышленников.

Обучая команду продажам, компания готова вам платить до 28 % с продаж вашей команды, то есть за общий товарооборот, который вы будете создавать со своей командой менеджером для компании Essens. На этом этапе ваш доход так же не ограничен.`
            },
            {
                type: "gallery", contents: [
                    get_file_path_from_src("assets/image/o-marketinge-1.jpg"),
                    get_file_path_from_src("assets/image/o-marketinge-2.jpg"),
                    get_file_path_from_src("assets/image/o-marketinge-3.jpg"),
                    get_file_path_from_src("assets/image/o-marketinge-4.jpg"),
                    get_file_path_from_src("assets/image/o-marketinge-5.jpg"),
                    get_file_path_from_src("assets/image/o-marketinge-6.jpg"),
                    get_file_path_from_src("assets/image/o-marketinge-7.jpg"),
                    get_file_path_from_src("assets/image/o-marketinge-8.jpg"),
                    get_file_path_from_src("assets/image/o-marketinge-9.jpg"),
                ]
            },
            { type: "text", content: `⬆️А это примеры комиссионного вознаграждения за общий командный товарооборот, которое выплачивает компания.` }
        ],
        [
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@16 - "Причины присоединиться к нашей команде"
    new Answer(
        [
            {
                type: "text", content: `😎Разработанные СИСТЕМЫ обучения через ПРОФЕССИЮ и ЭКСПЕРТНОСТЬ: 
            Бизнес и ПРЕДПРИНИМАТЕЛЬСТВО, Бьюти-направления, ИМИДЖ- СТИЛИСТИКА, АРОМАТЕРАПИЯ, ПАРФЮМЕРНАЯ СТИЛИСТИКА, профилактика здоровья и ЗОЖ .
            
💪Методики работы — ОФЛАЙН и ОНЛАЙН. 

😇Веду пошагово до результата.

Применяя мою систему, вы можете реально получать уже с первого месяца от 10тыс руб и за год выйти к доходу от 300тыс руб в месяц


🏆‌Ваши ВЫГОДЫ:
✅Легальный доход

✅Отсутствие материальных рисков

✅Работа в команде/обмен опытом

✅Работа по системе онлайн и офлайн на выбор

✅Обучение и сопровождение 24/7`}
        ],
        [
            { text: "🎉Корпоративы, встречи, фотосессии с командой", fixed: false, callback_name: "go_to@17" },
            { text: "✈️Путешествия", fixed: false, callback_name: "go_to@18" },
            { text: "🚗Автобонус", fixed: false, callback_name: "go_to@19" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@17 - "Причины присоединиться к нашей команде - Корпоративы, встречи, фотосессии с командой"
    new Answer(
        [
            {
                type: "text", content: `В нашей команде проходит  много корпоративных событий, где принять участие может каждый желающий. 

Закрытые вечеринки только внутри команды, дружба, общение, поддержка, все это и намного больше, вы сможете получить благодаря сотрудничеству с компанией Essens!
Посмотрите, пожалуйста, эти небольшие фильмы наших мероприятий!

У нас  вы можете получить признание, найти своё любимое дело, пройтись по красной дорожке под шум аплодисментов и почувствовать себя звездой. 

Однажды мы просто поверили в компанию и продукт, и наша жизнь изменилась, она действительно перевернулась с ног на голову в лучшую сторону! 

Мы обычные девчонки из разных  городов, у нас нет связей или богатых родителей, но есть огромное желание изменить свою жизнь! 

Однажды мы просто поверили и у нас стало получаться , а смогли мы, значит получится и у вас! Нужно просто попробовать и не упускать возможность!`}
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@16" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@18 - "Причины присоединиться к нашей команде - ✈️Путешествия"
    new Answer(
        [
            {
                type: "text", content: `Каждый партнёр компании Essens имеет возможность принять участие в мотивационых программах. Их несколько. Расскажу о одной из них


Наслаждайтесь бесплатным путешествием от компании Essens в роскошном 5-звездочном отеле на протяжении 7 дней по системе «всё включено» в сердце жаркой Турции! 

Принять участие в мотивационной программе могут все менеджеры от лидерской квалификации 17% , с общим созданным товарооборотом от 400 тыс руб  в течение 3х зимних месяцев. И чьи чеки колеблются от 21000 руб. 

При выполнении вышесказанных условий, каждый менеджер получает прекрасную возможность провести свой отпуск вместе с командой единомышленников совершенно бесплатно! `}
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@16" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),

    // go_to@19 - "Причины присоединиться к нашей команде - Автобонус"
    new Answer(
        [
            {
                type: "text", content: `Следующая шикарная возможность от  компании ESSENS - это АВТОПРОГРАММА🚗

АВТОБОНУС - это бонус, который компания вам выплачивает СВЕРХ вашего комиссионного вознаграждения. При соблюдении определенных условий, компания делает вам выплаты за рекламу на автомобиле!

Получить автобонус может КАЖДЫЙ, начиная уже от первой лидерской квалификации (товарооборот всего 400 тыс. руб! такого нет ни в одной компании☝️)

Уже очень много наших партнёров, воспользовались автопрограммой и имеют свой автомобиль!`}
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@16" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
        ]
    ),
];

// final - "Я хочу стать партнером"
export const final_message: Answer = new Answer(
    [
        {
            type: "text", content: `https://youtu.be/Ip4cJ2WKrKo?si=VL13gxYadxO9O5bO

✅Регистрация в компании, обучение - всё бесплатно 🙌 все расскажем и покажем!😉 

‼️Без обязательных закупок и вложений

❇️В первую очередь мы приглашаем вас зарабатывать и развивать бренд Essens! 

♥️Присоединяетесь 😊 у нас классно !`},
        {
            type: "text", content: `Ссылка на регистрацию🔽

https://www.essensworld.ru/r-950353716` },
        {
            type: "text", content: `Если вдруг остались какие-то вопросы, пожалуйста, свяжитесь со мной @ulason, мы оформим вам личный кабинет в интернет- магазине Essens, я займусь вашим обучением, помогу заработать первые деньги и поддержку на любых этапах, также добавлю в рабочие чаты поддержки.☺️

Желаю хорошего дня! Пусть все ваши мечты сбудутся вместе с нашей компанией Essens ☺️`
        }
    ],
    [
        { text: "🌟Зарегистрироваться!", fixed: false, callback_name: "to_social_network@https://www.essensworld.ru/r-950353716" },
        { text: "💬Связаться со мной", fixed: false, callback_name: "to_social_network@https://t.me/ulason" },
        { text: "♻️Главное меню♻️", fixed: false, callback_name: "start" }
    ]
)

export default {
    start_message,
    presentation,
    final_message
};