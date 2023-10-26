import { Context, InputFile, InlineKeyboard } from "grammy";
import { Answer } from "../types/answer";
import type { MessageAnswer, MediaGroup } from "../types/answer";

export async function send_answer_message(ctx: Context, messageAnswer: MessageAnswer, inlineKeyboard: InlineKeyboard | undefined = undefined): Promise<void> {
    const chat_id = ctx.chat ? ctx.chat.id : null;
    if (chat_id != null) {
        if (messageAnswer.type === "text") {
            if (messageAnswer.content != null) {
                await ctx.reply(messageAnswer.content, { reply_markup: inlineKeyboard });
            }
        } else {
            try {
                const loader_message = await ctx.reply('🚀Загрузка вложения...🚀');

                if (messageAnswer.type !== "gallery" && messageAnswer.content != null) {
                    const asset = new InputFile(messageAnswer.content);

                    if (messageAnswer.type === 'voice') {
                        await ctx.api.sendVoice(chat_id, asset, { reply_markup: inlineKeyboard });
                    } else if (messageAnswer.type === 'video') {
                        await ctx.api.sendVideo(chat_id, asset, { reply_markup: inlineKeyboard, supports_streaming: true });
                    } else if (messageAnswer.type === 'video-note') {
                        await ctx.api.sendVideoNote(chat_id, asset, { reply_markup: inlineKeyboard });
                    } else if (messageAnswer.type === 'image') {
                        await ctx.api.sendPhoto(chat_id, asset, { reply_markup: inlineKeyboard });
                    } else if (messageAnswer.type === 'doc') {
                        await ctx.api.sendDocument(chat_id, asset, { reply_markup: inlineKeyboard });
                    }
                } else {
                    if (messageAnswer.contents != null) {
                        const assets: MediaGroup[] = [];
                        for (let content of messageAnswer.contents) {
                            assets.push({
                                type: 'photo',
                                media: new InputFile(content)
                            })
                        }

                        await ctx.api.sendMediaGroup(chat_id, assets)
                    }
                }

                ctx.api.deleteMessage(chat_id, loader_message.message_id);
            } catch (e) {
                const message = "❌Файл не найден или его размер превышает допустимый!❌";
                console.error(message);
                console.error(e);
                ctx.reply(message);
            }
        }
    }
};

export async function answer_controller(ctx: Context, answer: Answer): Promise<void> {
    const answers = answer.answers;

    const chat_id = ctx.chat ? ctx.chat.id : null;
    if (chat_id != null) {
        const inlineKeyboardUnFixed = new InlineKeyboard();
        const inlineKeyboardFixed = new InlineKeyboard();

        if (answer.buttons.length > 0) {
            for (const b of answer.buttons) {
                let url;
                if (b.callback_name.startsWith('to_social_network')) {
                    url = b.callback_name.split('@')[1];
                }

                let button;
                if (url != null) {
                    button = { text: b.text, url };
                } else {
                    button = { text: b.text, callback_data: b.callback_name };
                }

                if (b.fixed === false) {
                    inlineKeyboardUnFixed.row(button);
                } else {
                    inlineKeyboardFixed.row(button);
                }
            }
        }

        for (let a in answers) {
            if (Number(a) < (answers.length - 1)) {
                await send_answer_message(ctx, answers[a], inlineKeyboardFixed.inline_keyboard.length > 0 ? inlineKeyboardFixed : undefined);
            }
        }

        send_answer_message(ctx, answers[answers.length - 1], inlineKeyboardUnFixed.inline_keyboard.length > 0 ? inlineKeyboardUnFixed : undefined);
    }
};