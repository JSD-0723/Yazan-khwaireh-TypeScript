"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const book_1 = require("../models/book");
const router = express_1.default.Router();
exports.router = router;
const bookModel = new book_1.BookModel();
// GET /books
router.get("/", (req, res) => {
    try {
        const books = bookModel.getAllBooks();
        res.json(books);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// GET /books/search?query=<search_query>
router.get("/search", (req, res) => {
    try {
        const query = req.query.query;
        if (!query) {
            throw new Error("Search query is missing");
        }
        const books = bookModel.searchBooksByTitle(query);
        res.json(books);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
