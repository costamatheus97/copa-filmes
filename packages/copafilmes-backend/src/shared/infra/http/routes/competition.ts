import movieCompetitionController from "@useCases/movieCompetition";
import { Request, Response, Router } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  movieCompetitionController.handle(req, res);
});

export default router;
