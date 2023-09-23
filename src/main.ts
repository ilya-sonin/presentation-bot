import dotenv from "dotenv";
dotenv.config();

import { Bot } from "grammy";
import { command_start, start_presentation, all_querys, final } from "./handlers/messageHander";

// Инициализируем телеметрию
import { init } from "./telemetry/index";
init();

const bot = new Bot(process.env.TOKEN || "put your token here");

bot.command("start", command_start);

bot.callbackQuery("start", start_presentation);
bot.callbackQuery("final", final);
bot.on("callback_query:data", all_querys);

bot.on("message", (ctx) => {
    ctx.reply("Заблудился❓❓❓\n\nНапиши /start")
});

bot.api.setMyCommands([
    { command: "start", description: "Начать презентацию" }
])

bot.start();
console.log("Bot started!");