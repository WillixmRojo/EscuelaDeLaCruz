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
          type: DataTypes.UUID,
          references: {
            model: "EC_CatInternacional",
            key: "IdInternacional"
          }
        },
        IdNacional: {
            type: DataTypes.UUID,
            references: {
                model: "EC_CatNacional",
                key: "IdNacional"
            }
        },
        IdRegional: {
            type: DataTypes.UUID,
            references: {
                model: "admin_cat_users",
                key: "id"
            }
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
  