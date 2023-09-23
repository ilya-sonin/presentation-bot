import { describe, it, beforeAll, expect } from "@jest/globals";

import { Sequelize } from "sequelize";
import { initDbTelemetry } from "../../index";

import { UsersController } from "../user.controller";
import User, { UserAttributes } from "../../models/user";

const userData1: UserAttributes = {
    tg_id: 111,
    first_name: 'Ivan',
    username: 'ivan',
    language_code: 'ru',
    chat_id: 111,
    last_message_date: 111,
    message_count: 0
};

const userData2: UserAttributes = {
    tg_id: 113,
    first_name: 'Pupkin',
    username: 'pupkin',
    language_code: 'ru',
    chat_id: 112,
    last_message_date: 114,
    message_count: 0
};

describe("Test user controller", () => {
    beforeAll(() => {
        const sequelize = new Sequelize("sqlite::memory:");
        return initDbTelemetry(sequelize);
    });

    it("create user and test get functions", async () => {
        const userController = new UsersController();

        const user = await userController.create_user(userData1);
        expect(user).toBeTruthy();

        const searchUserByID = await userController.get_user_by_id(1);
        expect(searchUserByID?.id).toBe(1);
        expect(searchUserByID?.username).toBe(user?.username);
        expect(searchUserByID?.chat_id).toBe(user?.chat_id);

        const loseSearchUserByID = await userController.get_user_by_id(5);
        expect(loseSearchUserByID).toBeFalsy();

        const searchUserByUserName = await userController.get_user_by_username(user?.username || "ivan");
        expect(searchUserByUserName?.id).toBe(1);
        expect(searchUserByUserName?.username).toBe(user?.username);
        expect(searchUserByUserName?.chat_id).toBe(user?.chat_id);

        const searchUserByChatId = await userController.get_user_by_chat_id(user?.chat_id || userData1.chat_id);
        expect(searchUserByChatId?.id).toBe(1);
        expect(searchUserByChatId?.username).toBe(user?.username);
        expect(searchUserByChatId?.chat_id).toBe(user?.chat_id);
    });

    it("test message count up", async () => {
        const userController = new UsersController();

        const user = await userController.create_user(userData2);

        if (user?.chat_id != null) {
            await userController.message_count_up(user, new Date().getTime());
            const message_count = await userController.message_count_up(user, new Date().getTime());

            const guser = await userController.get_user_by_tg_id(user?.tg_id);
            expect(guser?.message_count).toEqual(message_count);
        }
    });

    it("get all users", async () => {
        const userController = new UsersController();

        const users = await userController.get_all_users();
        expect(users.length).toBe(2);
        expect(users[0].username).toBe(userData1.username);
    });
});