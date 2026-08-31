<script setup lang="ts">
import { ref } from "vue";
import Form from "../components/Form.vue";
import { createAuthor, Author } from "../store";
import { useRouter } from "vue-router";

const router = useRouter();

const author = ref({
    name: "",
});

const handleSubmit = async (data: Omit<Author, "id">) => {
    await createAuthor(data);
    router.push({ name: "authors.overview" });
};
</script>
<template>
    <div>
        <h1>Add a new Author</h1>
        <Form :author="author" @submit="handleSubmit" />
    </div>
</template>
