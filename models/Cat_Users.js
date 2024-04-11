import { sequelize } from "../database/connectdb.js";
import { DataTypes } from "sequelize";

const catUsersSchema = sequelize.define(
  "admin_cat_users",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique: "user_id",
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "user_email",
    },
    idnivel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nivel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prod_access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: "FechaCargado",
    updatedAt: "FechaActualizado"
  }
);

(async () => {
  await catUsersSchema.sync({ alter: true });
})();

export const CatUsers = sequelize.model("admin_cat_users", catUsersSchema);
