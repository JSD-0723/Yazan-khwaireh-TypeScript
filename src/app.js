"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var book_js_1 = require("./routes/book.js");
var error_js_1 = require("./controllers/error.js");
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(book_js_1.default);
app.use(error_js_1.get404);
app.use(error_js_1.errorHandler);
app.listen(3000);
