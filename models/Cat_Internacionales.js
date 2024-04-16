import { sequelize } from "../database/connectdb.js";
import { DataTypes } from "sequelize";

const catInternationalSchema = sequelize.define(
    "EC_CatInternacional",
    {
      IdEstructura: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      IdInternacional: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      createdAt: "FechaCargado",
      updatedAt: "FechaActualizado"
    }
);

(async () => {
    await catInternationalSchema.sync({ alter: true });
  })();
  
export const CatInternational = sequelize.model("EC_CatInternacional", catInternationalSchema);
  