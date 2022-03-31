
const { Schema, model } = require("mongoose")

// Estructura que va a tener los usuarios en las coleciones de mongoDB Schema
const usuario = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    unique: true,
    type: String,
    required: true

  },
  password: {
    type: String,
    required: true
  },
})

// tienes quye exportar con model de mongoose
module.exports = model("Usuario", usuario)