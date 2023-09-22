"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get404 = (req, res) => {
    res.status(404).send('404 Not Found');
};
exports.default = get404;
