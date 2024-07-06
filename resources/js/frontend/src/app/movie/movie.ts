import { MovieGenre } from "./movie-genre";

export interface Movie {
    id: String;
    title: String;
    summary: String;
    poster_url: String;
    genre: MovieGenre;
}
