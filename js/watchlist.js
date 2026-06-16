const container =
    document.getElementById("watchlistContainer");

const watchlist =
    JSON.parse(localStorage.getItem("watchlist")) || [];

watchlist.forEach(movie => {

    const card = document.createElement("div");
    card.classList.add("moviecard");

    card.innerHTML = `
        <div class="imgList">
        <img
            src="https://image.tmdb.org/t/p/w300${movie.poster_path}"
            alt="${movie.title}"
        >
        </div>

        <div class="cardlist">
            <h3>${movie.title}</h3>
            <p>${movie.description || "No description available."} </p>
            <p>${movie.time || "Runtime unavailable."}</p>
        </div>
    `;

    container.appendChild(card);

});