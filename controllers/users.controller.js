import { CatUsers } from "../models/Cat_Users.js";

export const getUsers = async (req, res) => {
  try {
    const users = await CatUsers.findAll();
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({ error: "Error en servidor" });
  }
};

export const createUser = async (req, res) => {
  try {
    let { usuario, email, rfc, cliente, idrol } = req.body;

    idrol = idrol.value;
    const rol = idrol === 1 ? 'Administrador' : idrol === 2 ? 'Usuario' : 'Cliente';
    const dev_access = idrol === 1 ? 1 : 0;
    const beta_access = idrol === 1 ? 1 : 0;
    const prod_access = idrol === 1 ? 1 : 1;

    const user = new CatUsers({
      usuario,
      rfc,
      cliente,
      email,
      idrol,
      rol,
      dev_access,
      beta_access,
      prod_access,
    });

    console.log(user)

    const newUser = await user.save();

    return res.status(201).json({ newUser });
  } catch (error) {
    console.log(error)
    if (error.parent) {
      if (error.parent.number === 2627)
        return res.status(400).json({ error: "Ya existe este usuario" });
    }
    return res.status(500).json({ error: "Error en servidor" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await CatUsers.findByPk(id);
    if (!user)
      return res
        .status(404)
        .json({ error: "No existe información del usuario" });
    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Error en servidor" });
  }
};

export const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await CatUsers.findByPk(id);
    if (!user)
      return res
        .status(404)
        .json({ error: "No existe información del usuario" });

    await user.destroy();

    return res.json({ message: "Usuario borrado", email: user.email });
  } catch (error) {
    return res.status(500).json({ error: "Error en servidor" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      rfc,
      usuario,
      email,
      idrol,
      rol,
      dev_access,
      beta_access,
      prod_access
    } = req.body;

    const user = await CatUsers.findByPk(id);

    user.update({
      usuario,
      rfc,
      email,
      idrol,
      rol,
      dev_access,
      beta_access,
      prod_access,
    });

    if (!user)
      return res
        .status(404)
        .json({ error: "No existe información del usuario" });

    await user.save();

    return res.json({
      message: "Información de usuario actualizada",
      email: user.email,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error en servidor" });
  }
};
