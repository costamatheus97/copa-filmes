import { Router } from "express";

import competition from "./competition";
import movies from "./movies";

const router = Router();

router.use("/movies", movies);
router.use("/competition", competition);

export default router;
