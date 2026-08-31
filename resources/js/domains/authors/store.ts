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
