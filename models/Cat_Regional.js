import { sequelize } from "../database/connectdb.js";
import { DataTypes } from "sequelize";

const catRegionalSchema = sequelize.define(
    "EC_CatRegional",
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
      }
    },
    {
      freezeTableName: true,
      createdAt: "FechaCargado",
      updatedAt: "FechaActualizado"
    }
);

(async () => {
    await catRegionalSchema.sync({ alter: true });
  })();
  
export const CatRegional = sequelize.model("EC_CatRegional", catRegionalSchema);
  