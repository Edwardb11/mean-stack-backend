const mongoose = require("mongoose");
const connexionDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://edwardb11:root@cluster0.ypjsn.mongodb.net/crud?retryWrites=true&w=majority"
    );
    console.log("Conectado a DB")
  } catch (error) {
    console.log("Error al conectar")
  }

};
module.exports = connexionDB;
