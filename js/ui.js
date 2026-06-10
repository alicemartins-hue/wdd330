import { getMoviesByGenre } from "./apiService.js";


export function displayMovies(movies) {

    const moviesSection = document.getElementById("moviesSection");

    const container = document.getElementById("movieContainer");

    moviesSection.style.display = "block";


    container.innerHTML = "";

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
            <img
            src="https://image.tmdb.org/t/p/w300${movie.poster_path}"
            alt="${movie.title}"
            >

            <h3>${movie.title}</h3>
            `;
        
        container.appendChild(card);
    })
}


export function displayGenres(genres) {

    const container = document.getElementById("genreContainer");

    container.innerHTML = "";

    genres.slice(0, 5).forEach(genre => {

        const button = document.createElement("button");

        button.textContent = genre.name;
        button.dataset.id = genre.id;

        button.addEventListener("click", async () => {

            const movies = await getMoviesByGenre(genre.id);
            console.log(movies);

            displayMovies(movies);
        });

        container.appendChild(button);

    });

}

button.addEventListener("click", async () => {

    console.log("clicou em", genre.name);

    const movies =
        await getMoviesByGenre(genre.id);

    console.log(movies);

    displayMovies(movies);

});

