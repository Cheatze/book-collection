import axios from "axios";
import { ref, computed } from "vue";

export type Author = {
    id: number;
    name: string;
};

// state
const authors = ref<Author[]>([]);

//getters

export const getAllAuthors = computed(() => authors.value);

export const getAuthorById = (id: number) =>
    computed(() => authors.value.find((author) => author.id == id));

// actions
export const createAuthor = async (newAuthor: Omit<Author, "id">) => {
    const { data } = await axios.post("/api/authors", newAuthor);
    if (!data) return;
    authors.value = data;
};

export const fetchAuthors = async () => {
    const { data } = await axios.get("/api/authors");
    if (!data) return;
    authors.value = data;
};

export const updateAuthor = async (
    id: number,
    updatedAuthor: Omit<Author, "id">,
) => {
    const { data } = await axios.put(`/api/authors/${id}`, updatedAuthor);
    if (!data) return;
    authors.value = data;
};

export const deleteAuthor = async (id: number) => {
    await axios.delete(`/api/authors/${id}`);
    authors.value = authors.value.filter((author) => author.id !== id);
};
