import { Request, Response } from 'express';
import books from '../books.json';

// Adjust the Book type to match the structure in books.json
type Book = {
    id: number; // Add an id property
    name: string;
    author: string;
    isbn: string;
};

// Generate IDs for each book since they don't have one in books.json
const typedBooks: Book[] = books.map((book, index) => ({
    id: index + 1,
    ...book
}));
export const bookControllers = {
    getBooks: (req: Request, res: Response) => {
        if (!typedBooks) {
            return res.status(404).json({ success: false, msg: `No books are found!` });
        }
        res.status(200).json({ success: true, data: typedBooks });
    },

    getBook: (req: Request, res: Response) => {
        const id: number = Number(req.params.id);
        const book = typedBooks.find((book: Book) => book.id === id);
        if (!book) {
            return res.status(404).json({ success: false, msg: `404: No book with id: ${id} is found` });
        }
        res.status(200).json({ success: true, data: book });
    },

    
    createBook: (req: Request, res: Response) => {
        const name: string = req.body.name;
        const author: string = req.body.author;
        const isbn: string = req.body.isbn;
    
        if (!name || !author || !isbn) {
            return res.status(400).json({ success: false, msg: 'please provide name, author, and isbn values' });
        }
    
        typedBooks.push({ id: typedBooks.length + 1, name: name, author: author, isbn: isbn });
        res.status(201).json({ success: true, data: typedBooks });
    },

    updateBook: (req: Request, res: Response) => {
        const id: number = Number(req.params.id);
        const name: string = req.body.name;
        const bookIndex = typedBooks.findIndex((book: Book) => book.id === id);

        if (bookIndex === -1) {
            return res.status(404).json({ success: false, msg: `no book with id ${id}` });
        }

        typedBooks[bookIndex].name = name;

        res.status(200).json({ success: true, data: typedBooks });
    },

    deleteBook: (req: Request, res: Response) => {
        const id: number = Number(req.params.id);
        const bookIndex = typedBooks.findIndex((book: Book) => book.id === id);
        
        if (bookIndex === -1) {
            return res.status(404).json({ success: false, msg: `no book with id ${id}` });
        }

        typedBooks.splice(bookIndex, 1);

        res.status(200).json({ success: true, data: typedBooks });
    }
};

export default bookControllers;
