const express = require("express");
const express = require("express");
const app = express();
app.get("/",(req,res)=>{
  res.send("Acceso")
})
app.listen(3000,()=>{
  console.log("Aplicacion corriendo en el puerto 3000 ")
})