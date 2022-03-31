const Tarea = require("../models/tarea");

const createTarea = async (req, res) => {
  const { nombre } = req.body;
  const id = req.uid;

  const nuevatarea = new Tarea({
    nombre, creator: id
  });

  const tarea = await nuevatarea.save();
  res.status(200).json({
    ok: true,
    msg: "Tarea creadsa",
    tarea
  });
};
module.exports = { createTarea };
