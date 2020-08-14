const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: false},
  link: { type: String, required: true },
  
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;