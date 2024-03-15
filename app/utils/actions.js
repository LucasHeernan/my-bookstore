'use server';
import axios from 'axios';

export async function getBooks() {
  try {
    const response = await axios.get('http://localhost:5000/api/books').then(e => e.data);
    return response;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    throw error;
  }
};

export async function getFavorites() {
  try {
    const response = await axios.get('http://localhost:5000/api/books/favorites');
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export async function createBook(bookData) {
  try {
    const response = await axios.post('http://localhost:5000/api/books', bookData);
    return response.data;
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
};

export async function updateBook(id, updatedBookData) {
  try {
    const response = await axios.put(`http://localhost:5000/api/books/${id}`, updatedBookData);
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

export async function deleteBook(id) {
  try {
    const response = await axios.delete(`http://localhost:5000/api/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};