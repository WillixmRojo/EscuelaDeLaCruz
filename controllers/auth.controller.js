// Importación de librerías
import { CatUsers } from "../models/Cat_Users.js";
import { UsersAccess } from "../models/Users_Access.js";
import { generateRefreshToken, generateToken } from "../utils/tokenManager.js";

// Función register
export const register = async (req, res) => {
  try {
    const { usuario, email, password } = req.body;

    const validUser = await CatUsers.findOne({ where: { usuario } });

    if (!validUser)
      return res.status(401).json({ error: "Usuario no autorizado, favor de contactar al administrador." });

    const user = new UsersAccess({
      password: password,
      uid: validUser.id,
    });

    let idnivel = validUser.idrol;
    let nivel = validUser.rol;
    let prod_access = validUser.prod_access;

    validUser.update({
      usuario,
      email,
      idnivel,
      nivel,
      prod_access,
    });

    await user.save();

    await validUser.save();

    // Generar el token JWT
    const { token, expiresIn } = generateToken(validUser.uid);
    generateRefreshToken(validUser.uid, res);

    return res.status(201).json({
      message: "Registro exitoso",
      token,
      expiresIn,
      profile: validUser,
    });
  } catch (error) {
    if (error.parent) {
      if (error.parent.number === 2627)
        return res.status(400).json({ error: "Ya existe este usuario" });
    }
    console.log(error);
    return res.status(500).json({ error: "Error en servidor" });
  }
};

// Función login
export const login = async (req, res) => {
  try {
    const { user, password } = req.body;

    const userReg = await CatUsers.findOne({
      where: {
        usuario: user
      }
    });

    if (!user)
      return res.status(403).json({ error: "Credenciales incorrectas" });

    const userAccess = await UsersAccess.findOne({
      where: {
        uid: userReg.id
      }
    });

    if (!userAccess)
      return res.status(403).json({ error: "Credenciales incorrectas" });

    const resPassword = await userAccess.comparePassword(password);

    if (!resPassword)
      return res.status(403).json({ error: "Credenciales incorrectas" });

    // Generar el token JWT
    const { token, expiresIn } = generateToken(userAccess.uid);
    generateRefreshToken(userAccess.uid, res);

    return res.json({ token, expiresIn, profile: userReg });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error en servidor" });
  }
};

// Función refreshToken
export const refreshToken = async (req, res) => {
  try {
    const { token, expiresIn } = generateToken(req.uid);
    const user = await CatUsers.findByPk(req.uid);
    return res.json({ token, expiresIn, profile: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error en servidor" });
  }
};

// Función logout
export const logout = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ ok: true });
};
