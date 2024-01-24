import axios from 'axios'

//https://api.themoviedb.org/3/movie/now_playing?api_key=8abeeed5bba8c6ac8e98436fa16c50f4&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'

})

export default api;