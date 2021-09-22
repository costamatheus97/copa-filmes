import { AxiosResponse } from "axios";
import { IMovieRepository } from "repositories/IMovieRepository";

import { IMovie } from "../../interfaces/IMovie";

class GetMoviesUseCase {
  constructor(private movieRepository: IMovieRepository) {}
  async execute(): Promise<AxiosResponse<IMovie[]>> {
    const movies = await this.movieRepository.find();

    return movies;
  }
}

export { GetMoviesUseCase };
