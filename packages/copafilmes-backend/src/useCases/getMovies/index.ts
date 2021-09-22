import { MoviesRepository } from "repositories/implementations/moviesRepository";

import { GetMoviesController } from "./GetMoviesController";
import { GetMoviesUseCase } from "./GetMoviesUseCase";

const moviesRepository = new MoviesRepository();
const getMoviesUseCase = new GetMoviesUseCase(moviesRepository);
const getMoviesController = new GetMoviesController(getMoviesUseCase);

export default getMoviesController;
