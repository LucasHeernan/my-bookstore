"use client";
import { useState } from "react";
import { createBook } from "../utils/actions";

const validate = (errors) => {

  if (!errors.name.trim()) {
    errors.title = "Name field is required"
  } else if (errors.title.trim().length < 3) {
    errors.title = "The name must be more than 2 characthers"
  } else if (!errors.author.trim()) {
    errors.author = "Subject field is required"
  } else if (errors.author.trim().length < 3) {
    errors.author = "The subject must be more than 2 characthers"
  } else if (!errors.genre.trim()) {
    errors.genre = "Message field is required"
  } else if (errors.genre.trim().length < 5) {
    errors.genre = "The message must be more than 4 characters"
  } else if (!errors.date) {
    errors.date = "Year field is required"
  } else if (errors.date) {
    errors.date = "Year field only accepts number between 0 and 2050"
  } else if (!errors.description.trim()) {
    errors.description = "Message field is required"
  } else if (errors.description.trim().length < 150) {
    errors.description = "The message must be more than 150 characters"
  }

  return errors;
};

export default function CreateBook() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    date: "",
    genre: "",
    description: ""
  });
  const [errors, setErrors] = useState(bookData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const dateNumber = Number(bookData.date);
    createBook({...bookData, date: dateNumber});
    setBookData({
      title: "",
      author: "",
      date: "",
      genre: "",
      description: ""
    });
  };

  return (
    <form className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Título:</label>
        <input type="text" name="title" id="title" value={bookData.title} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Autor:</label>
        <input type="text" name="author" id="author" value={bookData.author} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Año:</label>
        <input type="text" name="date" id="date" value={bookData.year} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="genre" className="block text-gray-700 font-bold mb-2">Género:</label>
        <input type="text" name="genre" id="genre" value={bookData.genre} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Descripción:</label>
        <textarea name="description" id="description" value={bookData.description} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 h-32"></textarea>
      </div>
      <button
        onClick={(e) => handleCreate(e)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Crear libro
      </button>
    </form>
  );
};
