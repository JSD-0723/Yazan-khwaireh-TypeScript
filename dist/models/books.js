"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../utils/connection"));
const books = connection_1.default.define('books', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    author: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    isbn: {
        type: sequelize_1.DataTypes.STRING(20),
        unique: true,
        allowNull: false,
    },
});
exports.default = books;
