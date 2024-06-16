import { sequelize } from "../database/connectdb.js";
import { DataTypes } from "sequelize";

const catZonalSchema = sequelize.define(
    "EC_CatZonal",
    {
      IdEstructura: {
          type: DataTypes.STRING,
          primaryKey: true
      },
      IdInternacional: {
        type: DataTypes.STRING,
        allowNull: true
      },
      IdNacional: {
        type: DataTypes.STRING,
        allowNull: true
      },
      IdRegional: {
        type: DataTypes.STRING,
        allowNull: true
      },
      IdZonal: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      freezeTableName: true,
      createdAt: "FechaCargado",
      updatedAt: "FechaActualizado"
    }
);

(async () => {
    await catZonalSchema.sync({ alter: true });
  })();
  
export const CatZonal = sequelize.model("EC_CatZonal", catZonalSchema);
  