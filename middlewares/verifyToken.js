const jwt = require("jsonwebtoken");


const verifyToken=(req,res)=>{
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }

  const payload = jwt.verify(token, process.env.SECRET);
  console.log(payload);
}

module.exports = verifyToken;