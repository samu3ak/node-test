var Reloj = require("./reloj");

var miReloj = new Reloj(); // Cambia solo la referencia a esto

miReloj.on("tictac", () => {
    miReloj.theTime();
});