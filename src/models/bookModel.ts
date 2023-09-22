import { DataTypes  } from 'sequelize';
import sequelize from '../db/connection';

const booksModel = sequelize.define('booksModel', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING(50)
});

export default booksModel;
