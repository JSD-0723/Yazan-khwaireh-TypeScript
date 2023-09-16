import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { readFileSync } from 'fs';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Load the book data from the JSON file
const books = JSON.parse(readFileSync('books.json', 'utf8'));

interface CustomError {
  message: string;
}

// GET endpoint to search for books by name
app.get('/books', (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    if (!query || typeof query !== 'string') {
      throw new Error('Invalid query parameter');
    }

    const matchingBooks = books.filter((book: { name: string }) => {
      return book.name.toLowerCase().startsWith(query.toLowerCase());
    });

    res.json(matchingBooks);
  } catch (error) {
    if (typeof error === 'object' && 'message' in error) {
      const customError = error as CustomError;
      res.status(400).json({ error: customError.message });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
