const express = require('express')
const app = express()
const port = 3005

// Motor de plantillas
app.set("views", __dirname + "/views") // Añadir la constante __dirname es una buena práctica para que funcione en todos los entornos globales
app.set("view engine", "ejs")

// Middleware
app.use(express.static(__dirname + "/public")) // Importante

// Llamadas a las rutas
app.use("/", require("./router/rutas"));
app.use("/pokemon", require("./router/pokemon"));

// Si no se encuentra el recurso (Error 404) con página personalizada
app.use((req, res) => {
    //res.status(404).sendFile(__dirname + "/public/404.html")
    res.status(404).render("404", {
        titulo: "Error 404",
        descripcion: "Page Not Found"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})