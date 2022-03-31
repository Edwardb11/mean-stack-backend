const { Schema, model } = require("mongoose");
const tarea = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  creador: {
    type: Schema.Types.ObjectId,
    required: false,
    trim: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Tarea", tarea);
