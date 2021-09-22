import { AxiosResponse } from "axios";

import { IMovie } from "../interfaces/IMovie";

interface IMovieRepository {
  find(): Promise<AxiosResponse<IMovie[]>>;
}

export { IMovieRepository };
