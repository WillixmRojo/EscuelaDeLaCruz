import { sequelize } from "../database/connectdb.js";
import { DataTypes } from "sequelize";

const catNationalSchema = sequelize.define(
    "EC_CatNacional",
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
      }
      },
      {
        freezeTableName: true,
        createdAt: "FechaCargado",
        updatedAt: "FechaActualizado"
      }
);

(async () => {
    await catNationalSchema.sync({ alter: true });
  })();
  
export const CatNational = sequelize.model("EC_CatNacional", catNationalSchema);
  