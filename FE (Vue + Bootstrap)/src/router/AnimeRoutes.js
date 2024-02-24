import AnimeView from '../views/Anime/view.vue';
import AnimeCreate from '../views/Anime/create.vue';

const animeRoutes = [
    {
        path: '/anime',
        component: AnimeView
    },
    {
        path: '/anime/create',
        component: AnimeCreate
    }
]

export default animeRoutes