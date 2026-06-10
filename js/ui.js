import { getMoviesByGenre } from "./apiService.js";


export function displayMovies(movies) {
    const container = document.getElementById("movieContainer");

    container.innerHTML = "";

    movies.forEach(movie => {
        const card = document.createELement("div");
        card.classlist.add("movie-card");
        card.innerHTML = `
            <img
            src="https://image.tmdb.org/t/p/300${movie.poster_path}"
            alt="${movie.title}"
            >

            <h3>${movie.title}</h3>
            <p>${movie.release_date || "Release date unavailable"}</p>
            `;
        
        container.appendChild(card);
    })
}


export function displayGenres(genres) {

    const container = document.getElementById("genreContainer");

    container.innerHTML = "";

    genres.forEach(genre => {

        const button = document.createElement("button");

        button.textContent = genre.name;
        button.dataset.id = genre.id;

        button.addEventListener("click", async () => {

            const movies = await getMoviesByGenre(genre.id);

            displayMovies(movies);
        });

        container.appendChild(button);

    });

}

