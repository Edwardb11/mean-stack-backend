const tarea = require("../models/tarea");
const Tarea = require("../models/tarea");

const createTarea = async (req, res) => {
  const { nombre } = req.body;
  const id = req.uid;

  const nuevatarea = new Tarea({
    nombre,
    creator: id,
  });

  await nuevatarea.save();
  res.status(200).json({
    ok: true,
    msg: "Tarea creadsa",
    tarea,
  });
};
const readTarea = async (req, res) => {
  const id = req.uid;
  try {
    const tareas = await tarea.find({ creator: id }).sort({ createAt: -1 });
    return res.json({
      ok: true,
      tareas,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al obtener tareas",
    });
  }
};

module.exports = { createTarea, readTarea };
