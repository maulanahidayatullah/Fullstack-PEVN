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
                            <RouterLink :to="{ path: '/anime/edit/' + anime.id }" class="btn btn-success mx-1">
                                Edit
                            </RouterLink>
                            <button @click="deleteAnime(anime.id)" class="btn btn-danger">
                                Delete
                            </button>
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
    beforeRouteEnter(to, from, next) {
        axios.get('http://localhost:1993/anime/').then(res => {
            next(vm => {
                vm.animes = res.data.data;
            });
        });
    },
    methods: {
        getAnime() {
            axios.get('http://localhost:1993/anime/').then(res => {
                this.animes = res.data.data;
            });
        },
        deleteAnime(id) {
            if (confirm("Pengen Ngapus Lurr ?")) {
                axios.delete(`http://localhost:1993/anime/delete/${id}`).then(res => {
                    this.getAnime();
                });
            }

        }
    },
    components: { RouterLink }
}
</script>