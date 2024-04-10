import { sequelize } from "../database/connectdb.js";
import { DataTypes } from "sequelize";
import bcryptjs from "bcryptjs";

const usersAccessSchema = sequelize.define(
  "admin_users_access",
  {
    uid: {
      type: DataTypes.UUID,
      references: {
        model: "admin_cat_users",
        key: "id",
      },
      onDelete: "CASCADE",
      allowNull: false,
      unique: "access_uid",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    noPrimaryKey: true,
  }
);

usersAccessSchema.removeAttribute("id");

(async () => {
  await usersAccessSchema.sync({ alter: true });
})();

usersAccessSchema.beforeCreate(async function (user, next) {
  if (!user.isNewRecord) return next();

  try {
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);
  } catch (error) {
    console.log(error);
    throw new Error("Falló el hash de la contraseña");
  }
});

usersAccessSchema.prototype.comparePassword = async function (
  candidatePassword
) {
  return await bcryptjs.compare(candidatePassword, this.password);
};

export const UsersAccess = sequelize.model(
  "admin_users_access",
  usersAccessSchema
);
