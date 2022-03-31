const { Router } = require("express");
const { loginUsuario } = require("../controllers/authControllers");
const authRouter = Router();

authRouter.get("/login",loginUsuario);
module.exports = authRouter;
