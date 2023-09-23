import { Answer } from "./types/answer";

import { get_file_path_from_src } from "./common/files";

export const start_message: Answer = new Answer(
    [
        {
            type: "text",
            content: `Привет👋

Я бот, который проведет экскурсию в мир дорого качественного парфюма от компании Essens!

Нажимай скорей на кнопку!`,
        }
    ],
    [{ text: 'Начать презентацию ▶️', fixed: false, callback_name: "start" }]
);


export const presentation: Answer[] = [
    // go_to@0 - "главное меню..."
    new Answer(
        [{
            type: "text", content: `✅|Это главное меню меня)😄 

📲 Моя хозяйка лидер компании ESSENS Юлия Сонина @ulason - если ты хочешь поговорить с человеком, а не ботом, пиши @ulason напрямую 😉 не стесняйся, Юля профессионал и расскажет тебе все подробности о заработке 😉

Итак, давай посмотрим, чем я смогу тебе помочь! 

😎Я могу тебе рассказать о компании, продукции, маркетинге, о том, как и сколько ты сможешь зарабатывать в компании и многое другое!

➡️Выбирай с чего начнем:` }],
        [
            { text: "😎О компании😎", fixed: false, callback_name: "go_to@1" },
            { text: "💅О продукции💄", fixed: false, callback_name: "go_to@2" },
            { text: "🤝О бизнесе и маркетинге компании🤝", fixed: false, callback_name: "go_to@3" },
            { text: "О системе бизнеса и как получить меня😎", fixed: false, callback_name: "go_to@0" },
            { text: "7 причин присоедениться к нашей команде", fixed: false, callback_name: "go_to@0" },
            { text: "Агенство Essens, Travel", fixed: false, callback_name: "go_to@0" },
            { text: "Перейти по ссылке", fixed: false, callback_name: "to_social_network@http://google.com" },
            { text: "Я хочу стать партнером➡️", fixed: false, callback_name: "final" },
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
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "go_to@0" }
        ]
    ),

    // go_to@2 - "О продукции 1"
    new Answer(
        [
            { type: "video", content: get_file_path_from_src("assets/video/about_product.MP4") }
        ],
        [
            { text: "Далее ➡️", fixed: false, callback_name: "go_to@3" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "go_to@0" }
        ]
    ),

    // go_to@3 - "О продукции 2"
    new Answer(
        [
            {
                type: "text", content: `Флагман продукции - номерная парфюмерия (номерные духи), а также широкий ассортимент сопутствующих парфюмерных продуктов, уходовой косметики и биологически активных добавок, а так же шикарная декоравтиная косметика премиум класса ☝️👍

Вся продукция сертифицирована и соответствует евростандартам качества!` },
            { type: "image", content: get_file_path_from_src("assets/image/fl1.jpg") },
            { type: "image", content: get_file_path_from_src("assets/image/fl2.jpg") }
        ],
        [
            { text: "Далее ➡️", fixed: false, callback_name: "go_to@4" },
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@2" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "go_to@0" }
        ]
    ),

    // go_to@4 - "О продукции 3"
    new Answer(
        [
            {
                type: "text", content: `ESSENS - это самостоятельный бренд духов, наши технологи были воодушевлены ароматами мировых брендов и сделали свою эксклюзивную линейку номерного парфюма.

Для удобства выбора духов, разработан флаер, как ориентир в выборе направления аромата.

Выбраны популярные направления нот, но при этом наши духи более качественно открываются - в 3 ноты. 
❗️Более стойкие, так как содержат 20% аромоэссенций. 
❗️Доступные, так как доставляется на прямую от производителя (без посредников). 
❗️Безопасные, так как не содержат фталатов и других опасных веществ. 
❗️Европейское качество, потверждающее сертификацией. ❗️Производятся на всемирно известных заводах.`
            },
            { type: "image", content: get_file_path_from_src("assets/image/fl3.jpg") }
        ],
        [
            { text: "Назад ⬅️", fixed: false, callback_name: "go_to@3" },
            { text: "♻️Главное меню♻️", fixed: false, callback_name: "go_to@0" }
        ]
    ),

    // go_to@5 - "О бизнесе и маркетинге компании"
    new Answer(
        [
            {
                type: "text", content: ``,
            }
        ],
    )
];

export const final_message: Answer = new Answer([
    { type: "text", content: "Переходите по моей реф ссылке!" }
]);

export default {
    start_message,
    presentation,
    final_message
};