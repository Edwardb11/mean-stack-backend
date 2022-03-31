const tarea = require("../models/tarea");

const createTarea = async (req, res) => {
  const {nombre}= req.body

  const nuevatarea = new tarea({nombre});

  await nuevatarea.save()
  res.status(200).json({
    ok: true,
    msg: "Tarea creadsa",
  });
};
module.exports = { createTarea };
