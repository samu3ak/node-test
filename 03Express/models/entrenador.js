const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    nombre: String,
    genero: String,
    region: String,
    gimnasio: String,
    descripcion: String
})

//Creamos el modelo
const Entrenador = mongoose.model('dbentrenador', pokemonSchema, "entrenador");

module.exports = Entrenador;