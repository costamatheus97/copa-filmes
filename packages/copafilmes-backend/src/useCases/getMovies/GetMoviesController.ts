import { Request, Response } from "express";

import { GetMoviesUseCase } from "./GetMoviesUseCase";

class GetMoviesController {
  constructor(private getMoviesUseCase: GetMoviesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const movies = await this.getMoviesUseCase.execute();

    return res.json(movies);
  }
}

export { GetMoviesController };
