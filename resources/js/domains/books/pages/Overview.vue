<script setup lang="ts">
import { onMounted } from "vue";
import { fetchBooks, getAllBooks, deleteBook } from "../store";

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
            <td id="edit-link">
                <router-link
                    :to="{ name: 'books.edit', params: { id: book.id } }"
                    >Edit</router-link
                >
            </td>
            <td>
                <button @click="deleteBook(book.id)">Verwijder</button>
            </td>
        </tr>
    </table>
</template>
<style scoped>
table {
    width: 25%;
    border-collapse: collapse;
    border: 1px solid #ddd;
}
td {
    padding: 8px;
    border: 1px solid #ddd;
}
#edit-link {
    text-align: center;
    color: blue;
}
</style>
