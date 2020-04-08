const mongoose = require("mongoose");
const { schema } = mongoose;

const BookSchema = new Schema({
  bookId: {
    type: string,
  },
  title: {
    type: string,
  },
  authors: {
    type: Array,
  },
  description: {
    type: string,
  },
  image: {
    type: string,
  },
  link: {
    type: string,
  },
});

const Book = mongoose.model("book", "BookSchema");
module.exports = Book;
