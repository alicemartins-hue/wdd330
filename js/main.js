import { getGenres } from "./apiService.js";
import { displayGenres } from "./ui.js";
import { searchMovies } from "./apiService.js";
import { displayMovies } from "./ui.js";
import { displayRandomMovie } from "./ui.js";
import { getPopularMovies } from "./apiService.js";
import { displayPopularMovies } from "./ui.js";
import { displayHeroMovie } from "./ui.js";
import { getImdbId } from "./apiService.js";
import { getMovieDetails } from "./apiService.js";


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
    console.log("filmes encontrados", movies);
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


//css animation efects//
window.addEventListener("load", () => {
    const container = document.getElementById("popcorn-container");

    for (let i = 0; i < 50; i++) {
        const popcorn = document.createElement("div");

        popcorn.classList.add("popcorn");
        popcorn.textContent = "🍿";

        popcorn.style.left = Math.random() * 100 + "vw";
        popcorn.style.animationDelay = Math.random() * 2 + "s";
        popcorn.style.fontSize = 1 + Math.random() * 2 + "rem";

        container.appendChild(popcorn);

        setTimeout(() => {
            popcorn.remove();
        }, 6000);
    }
});

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("save-btn")) {

        let watchlist =
            JSON.parse(localStorage.getItem("watchlist")) || [];

        const movieId = Number(e.target.dataset.id);

        if (e.target.classList.contains("saved")) {

            watchlist = watchlist.filter(
                movie => movie.id !== movieId
            );

            e.target.classList.remove("saved");
            e.target.textContent = "♡";

        } else {

            const movie = {

                id: movieId,
                title: e.target.dataset.title,
                poster_path: e.target.dataset.poster

            };

            watchlist.push(movie);

            e.target.classList.add("saved");
            e.target.textContent = "♡";

        }

        localStorage.setItem(
            "watchlist",
            JSON.stringify(watchlist)
        );

    }

});


document.addEventListener("click", (e) => {

    if (e.target.classList.contains("save-btn")) {

        const movieData = {

            id: Number(e.target.dataset.id),
            title: e.target.dataset.title,
            poster_path: e.target.dataset.poster

        };

        let watchlist =
            JSON.parse(localStorage.getItem("watchlist")) || [];

        watchlist.push(movieData);

        localStorage.setItem(
            "watchlist",
            JSON.stringify(watchlist)
        );

    }

});

