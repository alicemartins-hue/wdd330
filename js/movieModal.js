import {
    getImdbId,
    getMovieDetails
} from "./apiService.js";


/*modal*/

export async function openMovieModal(movie) {

    const modal =
        document.getElementById("movieModal");

    const poster =
        document.querySelector(".modal-poster");

    const title =
        document.querySelector(".modal-title");

    const description =
        document.querySelector(".modal-description");

    const runtime =
        document.querySelector(".modal-runtime");

    const director =
        document.querySelector(".modal-director");

    const actors =
        document.querySelector(".modal-actors");

    //search data
    const imdbId =
        await getImdbId(movie.id);

    const details =
        await getMovieDetails(imdbId);

    // modal
    poster.src =
        `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    poster.alt =
        movie.title;

    title.textContent =
        movie.title;

    description.textContent =
        details.Plot;

    runtime.textContent =
        `Runtime: ${details.Runtime}`;

    director.textContent =
        `Director: ${details.Director}`;

    actors.textContent =
        `Actors: ${details.Actors}`;

    // show modal
    modal.classList.add("show");

}

const closeBtn =
    document.querySelector(".close-btn");

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        document
            .getElementById("movieModal")
            .classList.remove("show");

    });

}