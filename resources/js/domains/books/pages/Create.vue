<script setup lang="ts">
import { ref } from "vue";
import Form from "../components/Form.vue";
import { createBook, Book } from "../store";
import { useRouter } from "vue-router";

const router = useRouter();

const book = ref({
    title: "",
    description: "",
    author_id: null,
});

// type Book = {
//     id: number;
//     title: string;
//     description: string;
// };

const handleSubmit = async (data: Omit<Book, "id">) => {
    alert(
        `Book created: ${data.title} by author ID ${data.author_id} with description: ${data.description}`,
    );
    await createBook(data);
    router.push({ name: "books.overview" });
};
</script>
<template>
    <div>
        <h1>Add a new Book</h1>
        <Form :book="book" @submit="handleSubmit" />
    </div>
</template>
