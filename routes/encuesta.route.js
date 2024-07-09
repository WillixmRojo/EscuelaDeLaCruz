import { Router } from "express";
import { requireRefreshToken } from "../middlewares/validationToken.js";
import { saveDataQuestionaire } from "../controllers/cuestionario.controller.js";

const router = Router();

router.post("/forma/guardado", requireRefreshToken, saveDataQuestionaire);

export default router;