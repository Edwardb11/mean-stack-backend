
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const RegisterUsuario = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(501).json({
        ok: false,
        msg: "Correo ya registrado",
      });
    }
    nuevoUsuario = new Usuario({ email, password, username });
    // numero de caracteres y simbolos para encriptar la clave
    const salt = bcryptjs.genSaltSync(12)
    nuevoUsuario.password = bcryptjs.hashSync(password, salt)
    await nuevoUsuario.save();
    res.json({
      ok: true,
      email,
      username,
      msg: "Usuario creado",
    });
  } catch (error) {
    res.json({
      ok: true,
      msg: "Error al registrar",
    });
  }

};

const loginUsuario = (req, res) => {
  res.send("Auth controllers");
};

module.exports = { loginUsuario, RegisterUsuario };
