const API_KEY = "5d54260b02998bfee1ca3dac8071af1a";
const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY2 = "cd1577a1";

export async function getGenres() {

    const response = await fetch(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );

    const data = await response.json();

    return data.genres;
}

export async function getMoviesByGenre(genreId) {

    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&with_origin_country=US`
    );

    const data = await response.json();

    return data.results;

}

export async function searchMovies(query) {

    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const datas = await response.json();

    return datas.results;

}

export async function getPopularMovies() {

    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_origin_country=US`
    );

    const data = await response.json();

    return data.results;

}

export async function getImdbId(movieId) {

    const response = await fetch(
        `${BASE_URL}/movie/${movieId}/external_ids?api_key=${API_KEY}`
    );

    const data = await response.json();

    return data.imdb_id;

}

export async function getMovieDetails(imdbId) {

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY2}&i=${imdbId}`
    );

    const data = await response.json();

    return data;

}

export async function getImdbId(movieId) {

    const response = await fetch(
        `${BASE_URL}/movie/${movieId}/external_ids?api_key=${API_KEY}`
    );

    const data = await response.json();

    return data.imdb_id;

}

