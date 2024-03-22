"use client";
import { useState } from "react";
import { createBook } from "../utils/actions";

export default function CreateBook() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    date: "",
    genre: "",
    description: ""
  });

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
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
        <input type="text" name="title" id="title" value={bookData.title} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Author:</label>
        <input type="text" name="author" id="author" value={bookData.author} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year:</label>
        <input type="text" name="year" id="year" value={bookData.year} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="genre" className="block text-gray-700 font-bold mb-2">Genre:</label>
        <input type="text" name="genre" id="genre" value={bookData.genre} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
        <textarea name="description" id="description" value={bookData.description} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 h-32"></textarea>
      </div>
      <button
        onClick={(e) => handleCreate(e)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create Book
      </button>
    </form>
  );
};
