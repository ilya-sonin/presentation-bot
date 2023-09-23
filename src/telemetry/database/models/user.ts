import { Model, Optional } from "sequelize";

export type UserAttributes = {
    id?: number;

    tg_id: number;
    chat_id: number;

    first_name?: string;
    username?: string;
    language_code?: string;    
    last_message_date?: number;
    message_count?: number;
};

export type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export class User extends Model<UserAttributes, UserCreationAttributes> {
    declare id?: number;

    declare tg_id: number;
    declare chat_id: number;


    declare first_name?: string;
    declare username?: string;
    declare language_code?: string;
    
    declare last_message_date?: number;
    declare message_count?: number;
};

export default User;