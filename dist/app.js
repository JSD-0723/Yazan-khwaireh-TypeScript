"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = require("fs");
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use(body_parser_1.default.json());
// Load the book data from the JSON file
const books = JSON.parse((0, fs_1.readFileSync)('books.json', 'utf8'));
// GET endpoint to search for books by name
app.get('/books', (req, res) => {
    try {
        const { query } = req.query;
        if (!query || typeof query !== 'string') {
            throw new Error('Invalid query parameter');
        }
        const matchingBooks = books.filter((book) => {
            return book.name.toLowerCase().startsWith(query.toLowerCase());
        });
        res.json(matchingBooks);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
