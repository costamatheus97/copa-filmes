import axios, { AxiosResponse } from "axios";

import { IMovie } from "../../interfaces/IMovie";
import { IMovieRepository } from "../IMovieRepository";

class MoviesRepository implements IMovieRepository {
  async find(): Promise<AxiosResponse<IMovie[]>> {
    const { data } = await axios.get(
      "http://copafilmes.azurewebsites.net/api/filmes"
    );

    return data;
  }
}

export { MoviesRepository };
