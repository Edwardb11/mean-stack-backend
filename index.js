const express = require("express");
const connexionDB = require("./db/config");
const authRouter = require("./routes/auth");
const app = express();
// Para usar variables de entorno
require("dotenv").config();
// Conectado a la BD
connexionDB()
app.use(express.json())

app.use("/", express.static(__dirname + "/public"));

app.use("/auth",authRouter)

app.listen(process.env.PORT, () => {
  console.log(`Aplicacion corriendo en el puerto ${process.env.PORT} `);
});
