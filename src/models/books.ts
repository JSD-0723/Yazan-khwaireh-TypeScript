import { DataTypes } from 'sequelize';
import sequelize from '../utils/connection'

const books = sequelize.define('books', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    author: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    isbn: {
        type: DataTypes.STRING(20), // Adjust the length according to your ISBN format
        unique: true,
        allowNull: false,
    },
});


export default books;
