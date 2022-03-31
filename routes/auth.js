const { Router } = require("express");
const { RegisterUsuario } = require("../controllers/authControllers");
const authRouter = Router();

authRouter.post("/register",RegisterUsuario);
module.exports = authRouter;
