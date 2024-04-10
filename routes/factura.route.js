import { Router } from "express";
import { factura } from "../controllers/factura.controller.js";
import { requireToken } from "../middlewares/validationToken.js";

const router = Router();

router.get("/facturar", requireToken, factura);

export default router;