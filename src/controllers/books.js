"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBooks = exports.getBooks = void 0;
var book_js_1 = require("../models/book.js");
// GET /books --> Get All books
function getBooks(req, res) {
    book_js_1.default.fetchAll(function (books) {
        res.json(books);
    });
}
exports.getBooks = getBooks;
// GET /search?search="str" --> Get books that match the search
function searchBooks(req, res) {
    try {
        var searchQuery_1 = req.query.search;
        if (!searchQuery_1) {
            throw new Error("Search query is missing");
        }
        book_js_1.default.fetchAll(function (books) {
            var filteredBooks = books.filter(function (book) {
                return book.name.toLowerCase().includes(searchQuery_1.toLowerCase());
            });
            res.json(filteredBooks);
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.searchBooks = searchBooks;
