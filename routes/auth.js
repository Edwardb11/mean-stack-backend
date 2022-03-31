const { Router } = require("express");
const { RegisterUsuario, loginUsuario } = require("../controllers/authControllers");
const authRouter = Router();

authRouter.post("/register",RegisterUsuario);
authRouter.post("/login",loginUsuario);
module.exports = authRouter;
