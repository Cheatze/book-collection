<script setup lang="ts">
import { router } from "./router";
</script>
<template>
    <div>
        <h1>Hello World!</h1>
        <br />
    </div>
    <nav>
        <router-link class="nav-link" :to="{ name: 'books.overview' }"
            >Books Overview</router-link
        >
        <br />
        <router-link class="nav-link" :to="{ name: 'books.create' }"
            >Add a new Book</router-link
        >
        <br />
        <router-link class="nav-link" :to="{ name: 'authors.overview' }"
            >Authors Overview</router-link
        >
        <br />
        <router-link class="nav-link" :to="{ name: 'authors.create' }"
            >Add a new Author</router-link
        >
    </nav>
    <br />
    <router-view></router-view>
</template>
<style scoped>
.nav-link {
    text-decoration: none;
    color: #301ddd;
    font-weight: bold;
    margin-right: 10px;
}
</style>
