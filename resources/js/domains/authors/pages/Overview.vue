<script setup>
import { onMounted } from "vue";
import { fetchAuthors, getAllAuthors, deleteAuthor } from "../store";
import ErrorMessage from "../../authors/components/ErrorMessage.vue";

fetchAuthors();
</script>
<template>
    <div>
        <h1>Author Overview</h1>
        <p>This is the overview page for the authors domain.</p>
    </div>
    <ErrorMessage />
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
            <td id="edit-link">
                <router-link
                    :to="{ name: 'authors.edit', params: { id: author.id } }"
                    >Edit</router-link
                >
            </td>
            <td>
                <button @click="deleteAuthor(author.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>
<style scoped>
table {
    width: 10%;
    border-collapse: collapse;
    border: 1px solid #ddd;
    padding: 20px;
    margin: 20px;
}
td {
    padding: 8px;
    border: 1px solid #ddd;
}
</style>
