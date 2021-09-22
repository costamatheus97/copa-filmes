import getMoviesController from "@useCases/getMovies";
import { Request, Response, Router } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  await getMoviesController.handle(req, res);
});

export default router;
