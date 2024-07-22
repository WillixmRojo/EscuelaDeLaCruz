import { sequelize } from "../database/connectdb.js";
import { CatCuestionario } from "../models/Cat_Encuesta.js";

export const saveDataQuestionaire = async (req, res) => {
  try {
    let data = req.body;

    const register = new CatCuestionario({
      data,
    });

    await register.save();

    return res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error en servidor" });
  }
};

export const getInfoCatCuestionario = async (req, res) => {
  try {
    const data = await sequelize.query("EXEC SP_GetCatCuestionario");
    
    // Devuelve los datos en la respuesta
    return res.json({ data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error al obtener datos del servidor" });
  }
};

/* export const pruebaConsulta = async (req, res) => {
    try {
        const regional = sequelize.query("SELECT Idregional, Regional FROM EC_CatRegional")

        let nuevoRegistro = sequelize.query(
            `DELETE FROM EC_CatCuestionario WHERE IdRegional = ${regional}`
        )
    } catch (error) {
        console.log(error);

    }
} */
