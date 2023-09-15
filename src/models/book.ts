// src/models/book.ts
export interface Book {
  name: string;
  author: string;
  isbn: string;
}

export class BookModel {
  private books: Book[] = [];

  constructor() {
    // Load books from a JSON file or a database here
    // For now, let's load some sample data
    this.loadSampleData();
  }

  private loadSampleData() {
    // Load sample data from books.json
    const sampleData: Book[] = require("../../data/books.json");
    this.books = sampleData;
  }

  getAllBooks(): Book[] {
    return this.books;
  }

  searchBooksByTitle(query: string): Book[] {
    query = query.toLowerCase();
    return this.books.filter((book) => book.name.toLowerCase().startsWith(query));
  }
}
