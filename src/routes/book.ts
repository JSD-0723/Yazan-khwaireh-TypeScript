// src/routes/books.ts
import express, { Request, Response } from "express";
import { BookModel } from "../models/book";

const router = express.Router();
const bookModel = new BookModel();

// GET /books
router.get("/", (req: Request, res: Response) => {
  try {
    const books = bookModel.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /books/search?query=<search_query>
router.get("/search", (req: Request, res: Response) => {
  try {
    const query = req.query.query as string;
    if (!query) {
      throw new Error("Search query is missing");
    }
    const books = bookModel.searchBooksByTitle(query);
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
