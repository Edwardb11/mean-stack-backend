const tarea = require("../models/tarea");
const Tarea = require("../models/tarea");

// Funcion para crear una tarea POST
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

// Funcion para leer una tarea GET
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

// Funcion para actualizar una tarea PUT
const updateTarea = async (req, res) => {
  // Obtener el id de la tarea
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const tarea = await Tarea.findByIdAndUpdate(id, { nombre },{new:true});
    return res.json({
      ok: true,
      tarea,
    });
  } catch (error) {
    res.status(404).json({
      ok: false,
      msg: "Tarea no actualizada",
    });
  }
};

module.exports = { createTarea, readTarea, updateTarea };
