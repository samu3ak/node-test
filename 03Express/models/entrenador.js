const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrenadorSchema = new Schema({
    nombre: String,
    genero: String,
    region: String,
    gimnasio: String,
    descripcion: String
})

//Creamos el modelo
const Entrenador = mongoose.model('dbpokemon', entrenadorSchema, "entrenador");

module.exports = Entrenador;