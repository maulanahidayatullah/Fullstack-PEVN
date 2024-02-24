<template>
    <div data-bs-theme="dark">
        <div class="container mt-1">
            <h1>Anime</h1>
            <RouterLink to="/anime/create" class="btn btn-primary mb-3">Create</RouterLink>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th><b>No</b></th>
                        <th><b>Anime</b></th>
                        <th><b>Category</b></th>
                        <th><b>Action</b></th>
                    </tr>
                </thead>
                <tbody v-if="this.animes.length > 0">
                    <tr v-for="(anime, index) in this.animes" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ anime.title }}</td>
                        <td>
                            <span v-for="(category, x) in anime.kategori" :key="index">
                                - {{ category.nama }} <br>
                            </span>
                        </td>
                        <td>
                            <RouterLink to="/" class="btn btn-success mx-1">Edit</RouterLink>
                            <RouterLink to="/" class="btn btn-danger mx-1">Delete</RouterLink>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="4">LOADING...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: 'animes',
    data() {
        return {
            animes: []
        };
    },
    mounted() {
        this.getAnime();
    },
    methods: {
        getAnime() {
            axios.get('http://localhost:1993/anime/').then(res => {
                this.animes = res.data.data;
            });
        }
    },
    components: { RouterLink }
}
</script>