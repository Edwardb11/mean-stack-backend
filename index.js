const express = require("express");
require("dotenv").config()
const app = express();
app.use("/", express.static(__dirname + "/public"));
// app.get("/", (req, res) => {
//   res.send("Acceso");
// });
app.listen(process.env.PORT, () => {
  console.log(`Aplicacion corriendo en el puerto ${process.env.PORT} `);
});
