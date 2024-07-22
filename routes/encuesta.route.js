import { Router } from "express";
import { saveDataQuestionaire, getInfoCatCuestionario } from "../controllers/cuestionario.controller.js";
import { requireToken } from "../middlewares/validationToken.js";

const router = Router();

router.post("/forma/guardado", requireToken, saveDataQuestionaire);

router.get("/forma/info", requireToken, getInfoCatCuestionario);

export default router;