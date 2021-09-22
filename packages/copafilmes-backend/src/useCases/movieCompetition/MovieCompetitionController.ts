import { Request, Response } from "express";

import { MovieCompetitionUseCase } from "./MovieCompetitionUseCase";

class MovieCompetitionController {
  constructor(private movieCompetitionUseCase: MovieCompetitionUseCase) {}

  handle(req: Request, res: Response): Response {
    const movies = req.body;

    const movieWinners = this.movieCompetitionUseCase.execute(movies);

    return res.json(movieWinners);
  }
}

export { MovieCompetitionController };
