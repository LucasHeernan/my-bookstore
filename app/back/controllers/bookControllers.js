const Book = require('../models/book');

exports.createBooks = async (req, res) => {
  try {
    let booksData = [];

    if (req.body && typeof req.body === 'object' && !Array.isArray(req.body)) {
      booksData.push(req.body);
    } else if (Array.isArray(req.body)) {
      booksData = req.body;
    } else {
      return res.status(400).json({ error: 'El cuerpo de la solicitud debe ser un objeto o una matriz de objetos' });
    }

    const createdBooks = await Promise.all(booksData.map(async (bookData) => {
      const newBook = new Book(bookData);
      return await newBook.save();
    }));

    res.status(201).json(createdBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFavoriteBooks = async (req, res) => {
  try {
    const favoriteBooks = await Book.find({ favorite: true });
    res.status(200).json(favoriteBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, date, genre, description, favorite } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, { title, author, date, genre, description, favorite }, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(200).json({ message: 'Libro eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
