import axios from "axios";
import { ref, computed } from "vue";

type Book = {
    id: number;
    title: string;
    description: string;
};

// state
const books = ref<Book[]>([]);

// getters
export const getAllBooks = computed(() => books.value);

// actions
export const fetchBooks = async () => {
    const { data } = await axios.get("/api/books");
    if (!data) return;
    books.value = data;
};
