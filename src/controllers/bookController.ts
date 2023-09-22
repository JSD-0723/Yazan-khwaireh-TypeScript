import { Request, Response } from 'express';
import books from '../models/books';

export const bookControllers = {
    getBooks: async (req: Request, res: Response) => {
        try {
            const allBooks = await books.findAll();
            res.status(200).json({ success: true, data: allBooks });
        } catch (error) {
            console.error('Error fetching books:', error);
            res.status(500).json({ success: false, msg: 'Error fetching books' });
        }
    },

    getBook: async (req: Request, res: Response) => {
        const id: number = Number(req.params.id);
        try {
            const book = await books.findByPk(id);
            if (!book) {
                return res.status(404).json({ success: false, msg: `404: No book with id: ${id} is found` });
            }
            res.status(200).json({ success: true, data: book });
        } catch (error) {
            console.error('Error fetching book:', error);
            res.status(500).json({ success: false, msg: 'Error fetching book' });
        }
    },

    createBook: async (req: Request, res: Response) => {
        const { name, author, isbn } = req.body;

        try {
            const newBook = await books.create({ name, author, isbn });
            res.status(201).json({ success: true, data: newBook });
        } catch (error) {
            console.error('Error creating book:', error);
            res.status(500).json({ success: false, msg: 'Error creating book' });
        }
    },

    updateBook: async (req: Request, res: Response) => {
        const id: number = Number(req.params.id);
        const { name, author, isbn } = req.body;
    
        try {
            const book = await books.findByPk(id);
            if (!book) {
                return res.status(404).json({ success: false, msg: `No book with id: ${id} found` });
            }
    
            // Update the book record with the new data
            await book.update({ name, author, isbn });
    
            res.status(200).json({ success: true, data: book });
        } catch (error) {
            console.error('Error updating book:', error);
            res.status(500).json({ success: false, msg: 'Error updating book' });
        }
    },
    

    deleteBook: async (req: Request, res: Response) => {
        const id: number = Number(req.params.id);

        try {
            const book = await books.findByPk(id);
            if (!book) {
                return res.status(404).json({ success: false, msg: `No book with id: ${id} found` });
            }

            await book.destroy();
            res.status(200).json({ success: true, msg: 'Book deleted successfully' });
        } catch (error) {
            console.error('Error deleting book:', error);
            res.status(500).json({ success: false, msg: 'Error deleting book' });
        }
    },
};

export default bookControllers;
