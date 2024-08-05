import { sequelize } from "../database/connectdb.js";
import { CatCuestionario } from "../models/Cat_Encuesta.js";

export const saveDataQuestionaire = async (req, res) => {
  try {
    let { infoIds, newData, hierarchy } = req.body;

    const combinedData = {
      ...infoIds,
      Sacerdote: newData.sacerdote,
      Cruzado: newData.cruzado,
      Escuadron: newData.escuadron,
      Escuela: newData.escuela,
      Domicilio: newData.domicilio,
      Colonia: newData.colonia,
      Ciudad: newData.ciudad,
      Correo: newData.correo,
      TelefonoParticular: newData.telefonoParticular,
      TelefonoTrabajo: newData.telefonoTrabajo,
      Celular: newData.celular,
      EscuelaAyudantes: newData.escuelaAyudantes,
      CargoInternacional: hierarchy.CargoInternacional.value,
      CargoNacional: hierarchy.CargoNacional.value,
      CargoRegional: hierarchy.CargoRegional.value,
      CargoZona: hierarchy.CargoZona.value,
      CargoParroquia: hierarchy.CargoParroquia.value,
      PQELV: newData.pqelv,
      CCC: newData.ccc,
      LQEC: newData.lqec,
      PDUC: newData.pduc,
      DVAT: newData.dvat,
      PDDA: newData.pdda,
      Director: newData.director,
      SubDirector: newData.subDirector,
      Rector: newData.rector,
      AyudanteRector: newData.ayudanteRector,
      Intendente: newData.intendente,
      IntendenteInterno: newData.intendenteInterno,
      AyudanteConTestimonio: newData.ayudanteConTestimonio,
      AyudanteSinTestimonio: newData.ayudanteSinTestimonio,
      Oyente: newData.oyente,
      Cocina: newData.cocina,
      Capacitacion: newData.capacitacion,
      Espiritu: newData.espiritu,
      DirectoresRectores: newData.directoresRectores,
      SC_CEDR: newData.sc_CEDR,
      SC_Director: newData.sc_director,
      SC_Rector: newData.sc_rector,
      SC_Temistas: newData.sc_temistas,
      SC_Cocina: newData.sc_cocina,
    };

    const register = new CatCuestionario(combinedData);

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
    const { idperfil, idnivel } = req.query; 

    const data = await sequelize.query(
      "EXEC SP_GetCatCuestionario :idperfil, :idnivel",
      {
        replacements: { idperfil, idnivel },
      }
    );

    // const data = await sequelize.query("EXEC SP_GetCatCuestionario");

    // Devuelve los datos en la respuesta
    return res.json({ data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error al obtener datos del servidor" });
  }
};

export const getInfoCatParroquia = async (req, res) => {
  try {
    const { idperfil } = req.query;

    // Ejecuta el stored procedure con el parámetro
    const [data] = await sequelize.query(
      "EXEC SP_GetIdCatParroquia @idperfil = :idperfil",
      {
        replacements: { idperfil },
      }
    );

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
