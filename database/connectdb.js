import { Sequelize } from "sequelize";
import ISOLATION_LEVEL from "tedious";
import { sql } from "../helpers/config.js";

const mssqlconn = `mssql://${sql.user}:${sql.password}@${sql.host}:1433/${sql.database}`;
let options;

if (process.env.MODE_DEVELOP) {
  options = {
    useUTC: false,
    dateFirst: 1,
  };
} else {
  options = {
    useUTC: false,
    dateFirst: 1,
    encrypt: true,
    enableArithAbort: true,
    connectionIsolationLevel: ISOLATION_LEVEL.READ_UNCOMMITTED,
    trustServerCertificate: true,
  };
}

export const sequelize = new Sequelize(mssqlconn, {
  dialect: "mssql",
  timezone: "-07:00",
  dialectOptions: {
    options: options,
    requestTimeout: 30000
  },
  logging: false, // evita que se muestre el log de los querys ejecutados
});
