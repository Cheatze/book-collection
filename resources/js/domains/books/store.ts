import { storeModuleFactory } from "../../services/store";

import axios from "axios";
import { ref, computed } from "vue";
import {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
} from "../../services/http";

const booksStore = storeModuleFactory("books");

export type Book = {
    id: number;
    title: string;
    description: string;
    author_id: number | null;
};

// Export getters
export const getAllBooks = booksStore.getters.all;
export const getBookById = booksStore.getters.getById;

// Export actions
export const fetchBooks = booksStore.actions.getAll;
export const createBook = booksStore.actions.create;
export const updateBook = booksStore.actions.update;
export const deleteBook = booksStore.actions.delete;

// // state
// const books = ref<Book[]>([]);

// // getters
// export const getAllBooks = computed(() => books.value);

// export const getBookById = (id: number) =>
//     computed(() => books.value.find((book) => book.id == id));

// // actions
// export const fetchBooks = async () => {
//     const { data } = await getRequest("/books");
//     if (!data) return;
//     books.value = data;
// };

// export const createBook = async (newBook: Omit<Book, "id">) => {
//     const { data } = await postRequest("/books", newBook);
//     if (!data) return;
//     books.value = data;
// };

// export const updateBook = async (id: number, updatedBook: Omit<Book, "id">) => {
//     const { data } = await putRequest(`/books/${id}`, updatedBook);
//     if (!data) return;
//     books.value = data;
// };

// export const deleteBook = async (id: number) => {
//     await deleteRequest(`/books/${id}`);
//     books.value = books.value.filter((book) => book.id !== id);
// };
