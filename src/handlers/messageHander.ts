import { Context } from "grammy";

import telemetry from "../telemetry";
import config from "../config";
import { answer_controller } from "../controllers/messageController";

// Команда /start
export async function command_start(ctx: Context): Promise<void> {
    try {
        telemetry(ctx);
        await answer_controller(ctx, config.start_message);
    } catch (err) { }
}

// --------------------------- Обработчик калбеков на кнопки ------------------------------------

/**
 * Запуск "презентации", т.е вызов переменной config.presentation
 */
export async function start_presentation(ctx: Context): Promise<void> {
    try {
        telemetry(ctx);
        await answer_controller(ctx, config.presentation[0]);

        if (ctx.callbackQuery != null) {
            await ctx.answerCallbackQuery();
        }
    } catch (err) { }
}

export async function all_querys(ctx: Context): Promise<void> {
    try {
        telemetry(ctx);

        if (ctx.callbackQuery != null) {
            const callback_name = ctx.callbackQuery.data;

            if (callback_name != null) {
                if (callback_name.startsWith('go_to')) {
                    const index: number = Number(callback_name.split('@')[1]);

                    if (index !== null && index !== undefined) {
                        await answer_controller(ctx, config.presentation[index]);
                    }
                }
            }

            await ctx.answerCallbackQuery();
        }
    } catch (err) { }
}

/**
 * Вызываем финальное сообщение. 
 */
export async function final(ctx: Context): Promise<void> {
    try {
        telemetry(ctx);
        await answer_controller(ctx, config.final_message);

        if (ctx.callbackQuery != null) {
            await ctx.answerCallbackQuery();
        }
    } catch (err) { }
}
// --------------------------- END Обработчик калбеков на кнопки ------------------------------------