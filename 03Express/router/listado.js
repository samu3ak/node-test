const express = require('express');
const router = express.Router();
const Entrenador = require('../models/entrenador');
const Pokemon = require("../models/pokemon");

router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayEntrenador = await Entrenador.find();
        const arrayPokemon = await Pokemon.find();
        console.log(`${arrayEntrenador} & ${arrayPokemon}`);
        res.render("listado", {
            arrayPokemon: arrayPokemon,
            arrayEntrenador: arrayEntrenador
        })
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;