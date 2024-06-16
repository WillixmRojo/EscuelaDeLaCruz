// Importación de librerías
import "dotenv/config";
import express from "express";
import { sequelize } from "./database/connectdb.js";
import authRouter from "./routes/auth.route.js";
import usersRouter from "./routes/users.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import history from "connect-history-api-fallback"; //Se agrega para que funcione el modo "History" del lado del backend (solo para full-stack)

// Declaración de constantes
const app = express();
const PORT = process.env.PORT || 5000;
const serverName = process.env.MODE_DEVELOP ? "MS" : "Azure";

const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whiteList.includes(origin)) {
        return callback(null, origin);
      }
      return callback(
        "CLM - Error de CORS origin: " + origin + " no autorizado"
      );
    },
    credentials: true,
  })
);

// Uso de middlewares
app.use(express.json({limit: '100mb'}));
app.use(cookieParser());

// Habilitar la ruta pública
// app.use(history()); //Se agrega para que funcione el modo "History" del lado del backend (solo para full-stack)
app.use(express.static("public"));

// Configurar el uso de rutas
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);

// Conexión a la base de datos de MSSQL Server
try {
  await sequelize.authenticate();
  console.log(`CLM - Conectado a ${serverName} SQL Server`);
} catch (error) {
  console.log("CLM -Error al conectarse a MS SQL Server:" + error);
}

// Escuchar el puerto del servidor
app.listen(PORT, () =>
  console.log("CLM - Conectado a servidor en puerto:" + PORT)
);
