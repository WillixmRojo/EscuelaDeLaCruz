import jwt from "jsonwebtoken";
import { CatUsers } from "../models/Cat_Users.js";
import { tokenErrors } from "../utils/tokenManager.js";

// Función requireToken
export const requireToken = (req, res, next) => {
  try {
    let token = req.headers?.authorization;
    if (!token) throw new Error("No Bearer");

    token = token.split(" ")[1];
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    req.uid = uid;

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).send({ error: tokenErrors[error.message] });
  }
};

// Función requireRefreshToken
export const requireRefreshToken = (req, res, next) => {
  try {
    const refreshTokenCookie = req.cookies.refreshToken;
    if (!refreshTokenCookie) throw new Error("No Existe el token");

    const { uid } = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);

    req.uid = uid;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ error: tokenErrors[error.message] });
  }
};

// Función para validar el rol de Administrador
export const requireAdmin = async (req, res, next) => {
  try {
    const admin = await CatUsers.findByPk(req.uid);
    if (admin.idrol !== 1)
      throw new Error("Necesita permisos de Administrador!");

    next();
  } catch (error) {
    console.log(error.message);
    if (error.message) return res.status(401).json({ error: error.message });
    return res.status(500).json({ error: "Error de servidor" });
  }
};
