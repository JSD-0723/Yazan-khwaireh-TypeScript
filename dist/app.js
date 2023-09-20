"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const connection_1 = __importDefault(require("./db/connection"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/books', bookRoutes_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.authenticate(); // Check the database connection
        console.log('Database connection has been established successfully.');
        // Synchronize models with the database. This will create tables if they don't exist.
        // await sequelize.sync({ force: true });
        app.listen(5000, () => {
            console.log('Server is listening on port 5000...');
        });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}))();
