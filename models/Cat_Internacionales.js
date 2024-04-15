import { sequelize } from "../database/connectdb.js";
import { DataTypes } from "sequelize";

const catInternationalSchema = sequelize.define(
    "EC_CatInternacional",
    {
        IdInternacional: {
          type: DataTypes.UUID,
          primaryKey: true,
          references: {
            model: "admin_cat_users",
            key: "id"
          }
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
  