<template>
    <div class="container mt-1">
        <h1>Anime Create</h1>
        <br>

        <div class="mb-3">
            <label for="title">Title</label>
            <input v-model="animeData.title" class="form-control" type="text" id="title" placeholder="Input Title"
                aria-label="default input example">
        </div>
        <div class="mb-3">
            <label for="content">Content</label>
            <input v-model="animeData.content" class="form-control" type="text" id="content" placeholder="Input Content"
                aria-label="default input example">
        </div>
        <div class="mb-3">
            <label for="">Kategori</label>
            <div v-for="(category, index) in categories" :key="index">
                <div class="form-check">
                    <input v-model="animeData.kategori_id" class="form-check-input" type="checkbox" :value="category.id">
                    <label class="form-check-label" :for="'category-' + category.id">
                        {{ category.kategori }}
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <button @click="saveAnime" class="btn btn-primary">
                Save
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AnimeCreate',
    data() {
        return {
            animeData: {
                title: '',
                content: '',
                kategori_id: [] // Menyimpan ID kategori yang dipilih
            },
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
            });
        },
        saveAnime() {
            axios.post('http://localhost:1993/anime/create', this.animeData).then(res => {
                console.log('Anime berhasil disimpan:', res.data);
            });
            this.$router.push('/anime');
        }
    }
};
</script>
