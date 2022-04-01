const { validationResult } = require("express-validator");

const validationErrors=(req,res,next)=>{
  const errors= validationResult(req)
  // para validar que no manden informacion vacia
  if (!errors.isEmpty()) {
    return res.status(501).json({
      ok:false,
      errors:errors.mapped()
    })
  }
  // no hay errores y pasa al controlador
  next()
}

module.exports=validationErrors;