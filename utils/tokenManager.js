// Importación de librerías
import jwt from "jsonwebtoken";

// Función generateToken
export const generateToken = (uid) => {
  const expiresIn = 60 * 15; // el token durará 15 minutos

  try {
    const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn });
    return { token, expiresIn };
  } catch (error) {
    console.log(error);
  }
};

// Función generateRefreshToken
export const generateRefreshToken = (uid, res) => {
  const expiresIn = 60 * 60 * 24 * 30; // el token durará 30 días
  try {
    const refreshToken = jwt.sign({ uid }, process.env.JWT_REFRESH, {
      expiresIn,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false, //!process.env.MODE_DEVELOP,
      expires: new Date(Date.now() + expiresIn * 1000),
    });
  } catch (error) {
    console.log(error);
  }
};

// Constante para mapeo de mensajes de error
export const tokenErrors = {
  "invalid signature": "La firma del token no es válida",
  "jwt expired": "Token expirado",
  "invalid token": "Token no válido",
  "No Bearer": "Formato de token no válido",
  "jwt malformed": "Formato de token no válido",
};
