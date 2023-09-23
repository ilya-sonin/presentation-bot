import { Context } from "grammy";

import { initDbTelemetry } from "./database";

import { Sequelize } from "sequelize";
import { UsersController } from "./database/controllers/user.controller";
import { UserAttributes, User } from "./database/models/user";

export function init(): void {
    const sequelize = new Sequelize({
        dialect: "sqlite",
        storage: "./database.sqlite",
        logging: false
    });
    initDbTelemetry(sequelize);
};

export async function save(data: Context): Promise<boolean> {
    const usersController = new UsersController();

    if (data.update.callback_query != null) {
        if (data.update.callback_query.from.is_bot === false) {
            // Пытаемся найти чат по chat.id
            const chat_id = data.update.callback_query?.message?.chat.id;
            if (chat_id != null) {
                const user: User | null = await usersController.get_user_by_chat_id(chat_id);

                if (user != null) {
                    let date;
                    if (data.update.callback_query?.message != null) {
                        date = data.update.callback_query?.message.date;
                    } else {
                        date = new Date().getTime();
                    }

                    await usersController.message_count_up(user, date);

                    return true;
                }
            }
        }
    } else if (data.update.message != null) {
        const message = data.update.message;

        // пытаемся определить пользователя
        if (message.from.is_bot === false) {
            let user: User | null = await usersController.get_user_by_tg_id(message.from.id);;

            // Ищем пользователя по chat_id
            if (user == null) {
                user = await usersController.get_user_by_chat_id(message.chat.id);
            }

            // Создаем пользователя
            if (user == null) {
                const tg_id: number = message.from.id;
                const first_name: string | undefined = message.from.first_name;
                const username: string | undefined = message.from.username;
                const language_code: string | undefined = message.from.language_code;
                let chat_id: number | undefined = message.chat.id;
                const last_message_date = message.date || new Date().getTime();
                const newUserData: UserAttributes = {
                    tg_id,
                    first_name,
                    username,
                    language_code,
                    chat_id,
                    last_message_date,
                    message_count: 1
                };
                await usersController.create_user(newUserData);

                return true;
            } else {
                const last_message_date = message.date || new Date().getTime();
                await usersController.message_count_up(user, last_message_date);

                return true;
            }
        }
    }

    return false;
};

export default save;