import { sequelize } from "../database/connectdb.js";
import { DataTypes } from "sequelize";

const catCuestionarioSchema = sequelize.define(
    "EC_CatCuestionario",
    {
      IdRegistro: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true 
      },
      IdInternacional: {
        type: DataTypes.STRING,
        allowNull: false
      },
      IdNacional: {
        type: DataTypes.STRING,
        allowNull: false
      },
      IdRegion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      IdZona: {
        type: DataTypes.STRING,
        allowNull: true
      },
      IdParroquia: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Sacerdote: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Cruzado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      Escuadron: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Escuela: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      Domicilio: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Colonia: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Ciudad: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Correo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      TelefonoParticular: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      TelefonoTrabajo: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      Celular: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      EscuelaAyudantes: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      CargoInternacional: {
        type: DataTypes.STRING,
        allowNull: true
      },
      CargoNacional: {
        type: DataTypes.STRING,
        allowNull: true
      },
      CargoRegional: {
        type: DataTypes.STRING,
        allowNull: true
      },
      CargoZona: {
        type: DataTypes.STRING,
        allowNull: true
      },
      CargoParroquia: {
        type: DataTypes.STRING,
        allowNull: true
      },
      PQELV: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      CCC: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      LQEC: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      PDUC: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      DVAT: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      PDDA: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      //ServiciosEscuela
      Director: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      SubDirector: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      Rector: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      AyudanteRector: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      Intendente: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      IntendenteInterno: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      AyudanteConTestimonio: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      AyudanteSinTestimonio: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      Oyente: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      Cocina: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      //CursosTomadosEscuela
      Capacitacion: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      Espiritu: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      DirectoresRectores: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      //ServiciosCurso
      SC_CEDR: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      SC_Director: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      SC_Rector: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      SC_Temistas: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      SC_Cocina: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      createdAt: "FechaCargado",
      updatedAt: "FechaActualizado"
    }
);

(async () => {
    await catCuestionarioSchema.sync({ alter: true });
  })();
  
export const CatCuestionario = sequelize.model("EC_CatCuestionario", catCuestionarioSchema);