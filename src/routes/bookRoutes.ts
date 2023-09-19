import express from 'express';
import { bookControllers } from '../controllers/bookController';
const { getBooks, getBook, createBook, updateBook, deleteBook } = bookControllers;



const router = express.Router();


router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;