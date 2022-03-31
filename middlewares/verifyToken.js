const jwt = require("jsonwebtoken");

const verifyToken = (req, res,next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }
  try {
    const payload = jwt.verify(token, process.env.SECRET);
    console.log(payload);

    // agregando nueva propiedad al req para poder usarla en el middleware de autenticacion UID
    req.uid = payload.id;
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }

};

module.exports = verifyToken;
