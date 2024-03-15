const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Number, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  favorite: { type: Boolean, default: false }
});

bookSchema.set('toJSON', {
  transform: (doc, object) => {
    object.id = object._id
    delete object._id
    delete object.__v
  }
});

const Book = model('Book', bookSchema);

module.exports = Book;