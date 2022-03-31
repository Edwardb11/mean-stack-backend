const express = require("express");
const cors = require("cors")

const connexionDB = require("./db/config");
const authRouter = require("./routes/auth");
const tasksRouter = require("./routes/tareas");


const app = express();
// Para usar variables de entorno
require("dotenv").config();
// Conectado a la BD
connexionDB();
app.use(express.json());
app.use(cors());

app.use("/", express.static(__dirname + "/public"));

app.use("/auth", authRouter);
app.use("/task", tasksRouter);

app.listen(process.env.PORT, () => {
  console.log(`Aplicacion corriendo en el puerto ${process.env.PORT} `);
});
