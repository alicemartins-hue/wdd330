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
            src="https://image.tmdb.org/t/p/w154${movie.poster_path}"
            alt="${movie.title}"
            width ="300"
            height = "450"
        >
        </div>

        <div class="cardlist">
            <h3>${movie.title}</h3>
            <p class="description">${movie.description || "No description available."} </p>
            <p class="runtime">${movie.time || "Runtime unavailable."}</p>
        </div>
        <button class="remove-btn">
             🗑️
        </button>
    `;
        
    const removeBtn = card.querySelector(".remove-btn");

    removeBtn.addEventListener("click", () => {

        removeMovie(movie.id);

    });


    container.appendChild(card);

});



function removeMovie(id) {

    let watchlist =
        JSON.parse(localStorage.getItem("watchlist")) || [];

    watchlist =
        watchlist.filter(movie => movie.id !== id);

    localStorage.setItem(
        "watchlist",
        JSON.stringify(watchlist)
    );

    location.reload();

}


