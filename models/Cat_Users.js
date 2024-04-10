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
      allowNull: true,
    },
    rfc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "user_email",
    },
    idrol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dev_access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    beta_access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
