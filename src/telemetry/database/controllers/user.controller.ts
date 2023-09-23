import User, { UserAttributes } from "../models/user";

export class UsersController {
    async create_user(user: UserAttributes) {
        try {
            return await User.create(user);
        } catch (e) {
            if (e != null) {
                throw new Error("Не удалось создать пользователя!", e);
            }
        }
    }

    async message_count_up(user: User, last_message_date: number): Promise<number | null> {
        if (user != null) {
            if (user.message_count != null && typeof user.message_count === "number") {
                user.message_count++;
            } else {
                user.message_count = 1;
            }

            user.last_message_date = last_message_date;
            user.save();

            return user.message_count;
        }

        return null;
    }

    get_all_users(): Promise<User[]> {
        return User.findAll();
    }

    get_user_by_id(id: number): Promise<User | null> {
        return User.findByPk(id);
    }

    get_user_by_username(username: string): Promise<User | null> {
        return User.findOne({ where: { username } });
    }

    get_user_by_chat_id(chat_id: number): Promise<User | null> {
        return User.findOne({ where: { chat_id } });
    }

    get_user_by_tg_id(tg_id: number): Promise<User | null> {
        return User.findOne({ where: { tg_id } });
    }
}