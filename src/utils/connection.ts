import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('dog1', 'root', 'Dragon1995$', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize