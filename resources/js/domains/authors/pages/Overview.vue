<script setup>
import { onMounted } from "vue";
import { fetchAuthors, getAllAuthors } from "../store";

fetchAuthors();
</script>
<template>
    <div>
        <h1>Author Overview</h1>
        <p>This is the overview page for the authors domain.</p>
    </div>
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
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
