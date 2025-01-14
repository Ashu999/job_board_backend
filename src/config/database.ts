import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME || 'mydb',
    process.env.DB_USER || 'user',
    process.env.DB_PASS || 'userpass',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql'
    }
);

export default sequelize;