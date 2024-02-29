import AnimeView from '../views/Anime/view.vue';
import AnimeCreate from '../views/Anime/create.vue';
import AnimeEdit from '../views/Anime/edit.vue';

const animeRoutes = [
    {
        path: '/anime',
        component: AnimeView
    },
    {
        path: '/anime/create',
        component: AnimeCreate
    },
    {
        path: '/anime/edit/:id',
        component: AnimeEdit
    }
]

export default animeRoutes