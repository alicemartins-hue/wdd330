import { getGenres } from "./apiService.js";
import { displayGenres } from "./ui.js";

async function loadGenres() {

    const genres = await getGenres();

    displayGenres(genres);

}
