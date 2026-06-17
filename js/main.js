import {
    displayGenres, displayMovies, displayRandomMovie,
    displayPopularMovies, displayHeroMovie
} from "./ui.js";
import {
    getGenres, searchMovies, getPopularMovies, getImdbId,
    getMovieDetails
} from "./apiService.js";


async function loadGenres() {
  
    const genres = await getGenres();

    displayGenres(genres);
}

loadGenres();


//hero search and movie
const searchInput = document.getElementById("searchInput");

const searchBtn = document.getElementById("search-bar");

searchInput.addEventListener("keydown", async (e) => {

    if (e.key === "Enter") {

        const query = searchInput.value.trim();

        const movies = await searchMovies(query);

        displayHeroMovie(movies);

    }

});

searchBtn.addEventListener("click", async () => {

    const query = searchInput.value.trim();

    if (!query) return;

    const movies = await searchMovies(query);
    displayHeroMovie(movies);

});


//random bottom
const randomMovieBtn = document.getElementById("randomMovieBtn");

randomMovieBtn.addEventListener("click", async () => {

    const movies = await getPopularMovies();

    const randomIndex =
        Math.floor(Math.random() * movies.length);

    const randomMovie =
        movies[randomIndex];

    displayRandomMovie(randomMovie);

});

//to show popular movies
async function loadPopularMovies() {

    const movies = await getPopularMovies();

    displayPopularMovies(movies);

}
loadPopularMovies();

//cursor glow
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

document.addEventListener("click", async (e) => {

    if (!e.target.classList.contains("save-btn")) return;

    let watchlist =
        JSON.parse(localStorage.getItem("watchlist")) || [];

    const movieId = Number(e.target.dataset.id);

    const movieExists =
        watchlist.some(movie => movie.id === movieId);

    if (movieExists) {

        watchlist =
            watchlist.filter(movie => movie.id !== movieId);

        e.target.classList.remove("saved");

        e.target.textContent = "♡";

    } else {

        const imdbId =
            await getImdbId(movieId);

        const details =
            await getMovieDetails(imdbId);

        const movieData = {

            id: movieId,

            title: e.target.dataset.title,

            poster_path: e.target.dataset.poster,

            imdbId: imdbId,

            description: details.Plot,

            time: details.Runtime

        };

        watchlist.push(movieData);

        e.target.classList.add("saved");

        e.target.textContent = "♡";

    }

    localStorage.setItem(
        "watchlist",
        JSON.stringify(watchlist)
    );

});
