"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookControllers = void 0;
const books_json_1 = __importDefault(require("../books.json"));
// Generate IDs for each book since they don't have one in books.json
const typedBooks = books_json_1.default.map((book, index) => (Object.assign({ id: index + 1 }, book)));
exports.bookControllers = {
    getBooks: (req, res) => {
        if (!typedBooks) {
            return res.status(404).json({ success: false, msg: `No books are found!` });
        }
        res.status(200).json({ success: true, data: typedBooks });
    },
    getBook: (req, res) => {
        const id = Number(req.params.id);
        const book = typedBooks.find((book) => book.id === id);
        if (!book) {
            return res.status(404).json({ success: false, msg: `404: No book with id: ${id} is found` });
        }
        res.status(200).json({ success: true, data: book });
    },
    createBook: (req, res) => {
        const name = req.body.name;
        const author = req.body.author;
        const isbn = req.body.isbn;
        if (!name || !author || !isbn) {
            return res.status(400).json({ success: false, msg: 'please provide name, author, and isbn values' });
        }
        typedBooks.push({ id: typedBooks.length + 1, name: name, author: author, isbn: isbn });
        res.status(201).json({ success: true, data: typedBooks });
    },
    updateBook: (req, res) => {
        const id = Number(req.params.id);
        const name = req.body.name;
        const bookIndex = typedBooks.findIndex((book) => book.id === id);
        if (bookIndex === -1) {
            return res.status(404).json({ success: false, msg: `no book with id ${id}` });
        }
        typedBooks[bookIndex].name = name;
        res.status(200).json({ success: true, data: typedBooks });
    },
    deleteBook: (req, res) => {
        const id = Number(req.params.id);
        const bookIndex = typedBooks.findIndex((book) => book.id === id);
        if (bookIndex === -1) {
            return res.status(404).json({ success: false, msg: `no book with id ${id}` });
        }
        typedBooks.splice(bookIndex, 1);
        res.status(200).json({ success: true, data: typedBooks });
    }
};
exports.default = exports.bookControllers;
