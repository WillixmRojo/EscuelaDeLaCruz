import { sequelize } from "../database/connectdb.js";
import { DataTypes } from "sequelize";

const catParroquiaSchema = sequelize.define(
    "EC_CatParroquia",
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
      },
      IdParroquia: {
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
    await catParroquiaSchema.sync({ alter: true });
  })();
  
export const CatParroquia = sequelize.model("EC_CatParroquia", catParroquiaSchema);
  