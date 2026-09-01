<script setup lang="ts">
import { ref } from "vue";
import { fetchAuthors, getAllAuthors, Book } from "../../authors/store";
import FormError from "./FormError.vue";
import ErrorMessage from "./ErrorMessage.vue";

// Fetch authors when component is mounted
fetchAuthors();

const props = defineProps({ book: Object });

const emit = defineEmits(["submit"]);

const form = ref({ ...props.book });

const handleSubmit = () => emit("submit", form.value);
</script>

<template>
    <ErrorMessage />
    <form @submit.prevent="handleSubmit">
        <label>Titel:</label>
        <input v-model="form.title" type="text" required />
        <FormError name="title" />
        <label>Description:</label>
        <textarea v-model="form.description" required></textarea>
        <FormError name="description" />

        <label>Author:</label>
        <select v-model="form.author_id" required>
            <option
                v-for="author in getAllAuthors"
                :key="author.id"
                :value="author.id"
            >
                {{ author.name }}
            </option>
        </select>
        <FormError name="author_id" />
        <button type="submit">Submit</button>
    </form>
</template>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid #ddd;
    padding: 20px;
}
input {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ddd;
}
textarea {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ddd;
    resize: vertical;
}
select {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ddd;
}
</style>
