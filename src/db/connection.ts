import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('BooksLib', 'root', 'Dragon1995$', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;