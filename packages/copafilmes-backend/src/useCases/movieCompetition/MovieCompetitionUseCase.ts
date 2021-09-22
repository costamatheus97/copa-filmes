import { AppError } from "@shared/errors/AppError";

import { IMovie } from "../../interfaces/IMovie";

class MovieCompetitionUseCase {
  movieBattle(movies: IMovie[]): IMovie[] {
    if (movies.length === 2) {
      return movies;
    }

    const advancingMovies = [];

    for (let i = 0; i < movies.length; i++) {
      if (i % 2 === 0) {
        const currentMovie = movies[i];
        const adversaryMovie = movies[i + 1];

        if (currentMovie.nota > adversaryMovie.nota) {
          advancingMovies.push(currentMovie);
        } else if (currentMovie.nota === adversaryMovie.nota) {
          advancingMovies.push(currentMovie);
        } else {
          advancingMovies.push(adversaryMovie);
        }
      }
    }

    return this.movieBattle(advancingMovies);
  }

  execute(movies: IMovie[]): IMovie[] {
    if (movies.length !== 8) {
      throw new AppError("Please select 8 movies");
    }

    const orderedMoviesAlphabetically = movies.sort((a, b) => {
      if (a.titulo < b.titulo) {
        return -1;
      }
      if (a.titulo > b.titulo) {
        return 1;
      }
      return 0;
    });

    const orderedMoviesByPosition = [];

    for (let i = 0; i < orderedMoviesAlphabetically.length / 2; i++) {
      const currentMovie = orderedMoviesAlphabetically[i];
      const adversaryMovie =
        orderedMoviesAlphabetically[orderedMoviesAlphabetically.length - 1 - i];

      orderedMoviesByPosition.push(currentMovie, adversaryMovie);
    }

    const winnerMovies = this.movieBattle(orderedMoviesByPosition);

    return winnerMovies;
  }
}

export { MovieCompetitionUseCase };
