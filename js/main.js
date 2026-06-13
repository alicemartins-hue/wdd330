import { getGenres } from "./apiService.js";
import { displayGenres } from "./ui.js";
import { searchMovies } from "./apiService.js";
import { displayMovies } from "./ui.js";
import { displayRandomMovie } from "./ui.js";
import { getPopularMovies } from "./apiService.js";
import { displayPopularMovies } from "./ui.js";
import { displayHeroMovie } from "./ui.js";


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