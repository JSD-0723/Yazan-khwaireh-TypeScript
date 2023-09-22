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
exports.bookControllers = void 0;
const books_1 = __importDefault(require("../models/books"));
exports.bookControllers = {
    getBooks: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const allBooks = yield books_1.default.findAll();
            res.status(200).json({ success: true, data: allBooks });
        }
        catch (error) {
            console.error('Error fetching books:', error);
            res.status(500).json({ success: false, msg: 'Error fetching books' });
        }
    }),
    getBook: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(req.params.id);
        try {
            const book = yield books_1.default.findByPk(id);
            if (!book) {
                return res.status(404).json({ success: false, msg: `404: No book with id: ${id} is found` });
            }
            res.status(200).json({ success: true, data: book });
        }
        catch (error) {
            console.error('Error fetching book:', error);
            res.status(500).json({ success: false, msg: 'Error fetching book' });
        }
    }),
    createBook: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, author, isbn } = req.body;
        try {
            const newBook = yield books_1.default.create({ name, author, isbn });
            res.status(201).json({ success: true, data: newBook });
        }
        catch (error) {
            console.error('Error creating book:', error);
            res.status(500).json({ success: false, msg: 'Error creating book' });
        }
    }),
    updateBook: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const { name } = req.body;
        try {
            const book = yield books_1.default.findByPk(id);
            if (!book) {
                return res.status(404).json({ success: false, msg: `No book with id: ${id} found` });
            }
            yield book.update({ name });
            res.status(200).json({ success: true, data: book });
        }
        catch (error) {
            console.error('Error updating book:', error);
            res.status(500).json({ success: false, msg: 'Error updating book' });
        }
    }),
    deleteBook: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(req.params.id);
        try {
            const book = yield books_1.default.findByPk(id);
            if (!book) {
                return res.status(404).json({ success: false, msg: `No book with id: ${id} found` });
            }
            yield book.destroy();
            res.status(200).json({ success: true, msg: 'Book deleted successfully' });
        }
        catch (error) {
            console.error('Error deleting book:', error);
            res.status(500).json({ success: false, msg: 'Error deleting book' });
        }
    }),
};
exports.default = exports.bookControllers;
