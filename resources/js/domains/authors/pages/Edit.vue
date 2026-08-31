<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Form from "../components/Form.vue";
import { getAuthorById, updateAuthor, Author } from "../store";

const route = useRoute();
const router = useRouter();

const author = getAuthorById(Number(route.params.id));

const handleSubmit = async (data: Omit<Author, "id">) => {
    await updateAuthor(Number(route.params.id), data);
    router.push({ name: "authors.overview" });
};
</script>
<template>
    <div>
        <h1>Edit Author</h1>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>
