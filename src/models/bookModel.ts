import { DataTypes  } from 'sequelize';
import sequelize from '../utils/connection';

const booksModel = sequelize.define('booksModel', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
    type: DataTypes.STRING(50) ,
    allowNull: false,
    },

    author:{

        type: DataTypes.STRING(50) ,
        allowNull: false,
    },

      isbn: {


        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,


      },



});

export default booksModel;
