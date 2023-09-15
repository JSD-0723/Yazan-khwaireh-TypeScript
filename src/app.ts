// src/index.ts
import express from "express";
import booksRouter from "./routes/books";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
