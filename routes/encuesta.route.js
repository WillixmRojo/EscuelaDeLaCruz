import { Router } from "express";
import { saveDataQuestionaire, getInfoCatCuestionario, getInfoCatParroquia } from "../controllers/cuestionario.controller.js";
import { requireToken } from "../middlewares/validationToken.js";

const router = Router();

router.post("/forma/guardado", requireToken, saveDataQuestionaire);

router.get("/forma/info", requireToken, getInfoCatCuestionario);

router.get("/forma/infoParroquia", requireToken, getInfoCatParroquia);

export default router;