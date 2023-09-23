import { Sequelize, DataTypes } from "sequelize";
import User from "./models/user";

export async function initDbTelemetry(sequelize: Sequelize): Promise<void> {
    User.init(
        {
            id: { 
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            tg_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            chat_id: { 
                type: DataTypes.INTEGER,
                allowNull: false
            },

            first_name: DataTypes.STRING,
            username: DataTypes.STRING,
            language_code: DataTypes.STRING,        
            last_message_date: DataTypes.INTEGER,
            message_count: DataTypes.INTEGER
        },
        {
            tableName: 'users',
            sequelize
        }
    );

    await sequelize.sync();
};

export default initDbTelemetry;