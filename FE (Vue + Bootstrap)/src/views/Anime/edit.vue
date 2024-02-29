<template>
    <div class="container mt-1">
        <h1>Anime Edit</h1>
        <br>

        <div class="mb-3">
            <label for="title">Title</label>
            <input v-model="anime.title" class="form-control" type="text" id="title" placeholder="Input Title"
                aria-label="default input example">
        </div>
        <div class="mb-3">
            <label for="content">Content</label>
            <input v-model="anime.content" class="form-control" type="text" id="content" placeholder="Input Content"
                aria-label="default input example">
        </div>
        <div class="mb-3">
            <label for="">Kategori</label>
            <div v-for="(category, index) in categories" :key="index">
                <div class="form-check">
                    <input v-model="anime.kategori_id" class="form-check-input" type="checkbox" :value="category.id">
                    <label class="form-check-label" :for="'category-' + category.id">
                        {{ category.kategori }}
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <button @click="updateAnime" class="btn btn-primary">
                Save
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AnimeEdit',
    data() {
        return {
            animeId: '',
            anime: {
                title: '',
                content: '',
                kategori_id: []
            },
            categories: []
        };
    },
    mounted() {
        this.animeId = this.$route.params.id;
        this.getAnimeById(this.$route.params.id);
    },
    methods: {
        getAnimeById(id) {
            axios.get(`http://localhost:1993/anime/${id}`)
                .then(res => {
                    this.anime = res.data.data;
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.status == 400) {
                            alert(error.response.data.message);
                            // console.log(error.response.data.message);
                        }
                    }
                });
        },

        getCategory() {
            axios.get('http://localhost:1993/kategori/').then(res => {
                this.categories = res.data.data;
            });
        },
        updateAnime() {
            axios.put(`http://localhost:1993/anime/update/${this.animeId}`, this.anime)
                .then(res => {
                    this.$router.push('/anime');
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.status == 400) {
                            console.log(error.response.data.message);
                        }
                        if (error.response.status == 404) {
                            console.log(error.response.data.message);
                        }
                    }
                });

        }
    }
};
</script>
