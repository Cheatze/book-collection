<script setup lang="ts">
import { ref } from "vue";
import FormError from "./FormError.vue";
import ErrorMessage from "./ErrorMessage.vue";

const props = defineProps({ author: Object });

const emit = defineEmits(["submit"]);

const form = ref({ ...props.author });

const handleSubmit = () => emit("submit", form.value);
</script>
<template>
    <ErrorMessage />
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="name">Name:</label>
            <input id="name" v-model="form.name" />
            <FormError name="name" />
        </div>
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
button {
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}
</style>
