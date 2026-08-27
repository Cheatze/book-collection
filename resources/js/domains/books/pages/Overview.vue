<script setup>
import { onMounted } from "vue";
import { fetchBooks, getAllBooks } from "../store";

fetchBooks();
</script>
<template>
    <div>
        <h1>Book Overview</h1>
        <p>This is the overview page for the books domain.</p>
    </div>
    <table>
        <tr>
            <th>Title</th>
            <th>Description</th>
        </tr>
        <tr v-for="book in getAllBooks" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.description }}</td>
        </tr>
    </table>
</template>
<style scoped>
table {
    width: 25%;
    border-collapse: collapse;
    border: 1px solid #ddd;
}
</style>
