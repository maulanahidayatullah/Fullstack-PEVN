<template>
    <div class="container mt-1">
        <h1>Anime Create</h1>
        <br>

        <div class="mb-3">
            <label for="">Title</label>
            <input class="form-control" type="text" placeholder="Input Title" aria-label="default input example">
        </div>
        <div class="mb-3">
            <label for="">Content</label>
            <input class="form-control" type="text" placeholder="Input Content" aria-label="default input example">
        </div>
        <div class="mb-3">
            <label for="">Kategori</label>
            <div v-for="(category, index) in this.categories" :key="index">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="category.id" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        {{ category.kategori }}
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <button type="button" class="btn btn-primary">
                Save
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: 'categories',
    data() {
        return {
            categories: []
        };
    },
    mounted() {
        this.getCategory();
    },
    methods: {
        getCategory() {
            axios.get('http://localhost:1993/kategori/').then(res => {
                this.categories = res.data.data;
                // console.log(res.data.data);
            });
        }
    },
    components: { RouterLink }
}
</script>