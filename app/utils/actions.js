'use server';
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function getBooks() {
  try {
    const response = await axios.get('http://localhost:5000/api/books').then(e => e.data);
    return response;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export async function getBookById(id) {
  try {
    const response = await axios.get(`http://localhost:5000/api/books/${id}`).then(e => e.data);
    return response;
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    throw error;
  }
};

export async function getFavorites() {
  try {
    const response = await axios.get('http://localhost:5000/api/books/favorites').then(e => e.data);
    return response;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export async function createBook(bookData) {
  try {
    const response = await axios.post('http://localhost:5000/api/books', bookData).then(e => e.data);
    return response;
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
};

export async function updateBook(id, updatedBookData) {
  try {
    await axios.put(`http://localhost:5000/api/books/${id}`, updatedBookData);
    revalidatePath('/');
    redirect('/');
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

export async function updateFavorite(id, favorite) {
  try {
    await axios.put(`http://localhost:5000/api/books/${id}`, { favorite: !favorite });
    revalidatePath('/');
    return;
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
    throw error;
  }
};

export async function deleteBook(id) {
  try {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    revalidatePath('/');
    return console.log('Libro eliminado exitosamente');
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};