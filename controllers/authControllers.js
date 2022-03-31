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
    await nuevoUsuario.save();
    res.json({
      ok: true,
      email,
      username,
      password,
      msg: "Usuario creado",
    });
  } catch (error) {
    res.json({
      ok: true,
      msg: "Error al registrar",
    });
  }
  Usuario.res.json({ ok: true, email, username, password });
};

const loginUsuario = (req, res) => {
  res.send("Auth controllers");
};

module.exports = { loginUsuario, RegisterUsuario };
