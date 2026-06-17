import { getMoviesByGenre } from "./apiService.js";
import { openMovieModal } from "./movieModal.js";


export function displayMovies(movies) {

    const moviesSection = document.getElementById("moviesSection");

    const container = document.getElementById("movieContainer");

    moviesSection.style.display = "block";


    container.innerHTML = "";

    movies.slice(0,6).forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
            <img
            src="https://image.tmdb.org/t/p/w300${movie.poster_path}"
            alt="${movie.title}"
            >

            <h3>${movie.title}</h3>
            <button class="save-btn" data-id="${movie.id}"
            data-title="${movie.title}"
            data-poster="${movie.poster_path}">♡</button>
            `;
        
        card.addEventListener("click", () => {

            console.log("CLICK", movie.title);

            openMovieModal(movie);

        });
        
        container.appendChild(card);
    })
}

/* Genre Buttons display function*/
export function displayGenres(genres) {

    const container = document.getElementById("genreContainer");

    container.innerHTML = "";

    genres.slice(0, 8).forEach(genre => {

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

export function displayRandomMovie(movie) {

    const container =
        document.getElementById("randomMovieContainer");

    container.innerHTML = "";

    const card = document.createElement("div");

    card.classList.add("movie-card");

    card.innerHTML = `
        <img
            src="https://image.tmdb.org/t/p/w300${movie.poster_path}"
            alt="${movie.title}"
        >

        <h3>${movie.title}</h3>
            <button class="save-btn" data-id="${movie.id}"
            data-title="${movie.title}"
            data-poster="${movie.poster_path}">♡</button>
            
    `;

    card.addEventListener("click", () => {

        openMovieModal(movie);

    });

    container.appendChild(card);

}



export function displayPopularMovies(movies) {

    const container =
        document.getElementById("popularmovieContainer");

    container.innerHTML = "";

    movies.slice(0, 6).forEach(movie => {

        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img
                src="https://image.tmdb.org/t/p/w300${movie.poster_path}"
            >

            <h3>${movie.title}</h3>
            <button class="save-btn" data-id="${movie.id}"
            data-title="${movie.title}"
            data-poster="${movie.poster_path}">♡</button>
            
        `;

        card.addEventListener("click", () => {

            openMovieModal(movie);

        });

        container.appendChild(card);
    });

}

export function displayHeroMovie(movies) {

    const movie = document.getElementById("hero-search");

    const container = document.getElementById("heroMovie");

    movie.style.display = "block";


    container.innerHTML = "";

    movies.slice(0, 6).forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
            <img
            src="https://image.tmdb.org/t/p/w300${movie.poster_path}"
            alt="${movie.title}"
            >

            <h3>${movie.title}</h3>
            <button class="save-btn" data-id="${movie.id}"
            data-title="${movie.title}"
            data-poster="${movie.poster_path}">♡</button>
            `;
        
        card.addEventListener("click", () => {

            openMovieModal(movie);

        });

        container.appendChild(card);
    })
}
