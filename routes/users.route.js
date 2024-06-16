import { Router } from "express";
import {
  createUser,
  getUser,
  getUsers,
  removeUser,
  updateUser,
} from "../controllers/users.controller.js";
import { requireAdmin, requireToken } from "../middlewares/validationToken.js";
import {
  bodyUserValidator,
  paramsValidator,
} from "../middlewares/validatorManager.js";

const router = Router();

// GET      /api/users        all users
// GET      /api/users/:id    single user
// POST     /api/users        create user
// PUT      /api/users/:id    update user
// DELETE   /api/users/:id    remove user

router.get("/:lvl", requireToken, getUsers);
// router.get("/:id", requireToken, requireAdmin, paramsValidator, getUser);
router.post("/", requireToken, createUser);
router.delete("/:id", requireToken, requireAdmin, paramsValidator, removeUser);
router.put(
  "/:id",
  requireToken,
  requireAdmin,
  paramsValidator,
  bodyUserValidator,
  updateUser
);

export default router;
