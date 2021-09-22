import { MovieCompetitionController } from "./MovieCompetitionController";
import { MovieCompetitionUseCase } from "./MovieCompetitionUseCase";

const movieCompetitionUseCase = new MovieCompetitionUseCase();
const movieCompetitionController = new MovieCompetitionController(
  movieCompetitionUseCase
);

export default movieCompetitionController;
