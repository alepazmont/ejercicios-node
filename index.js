// IMPORTAR MÓDULOS Y VARIABLES
const express = require("express");
const { alumnos } = require("./alumnos")

console.log(alumnos)

const PORT = 3000;
// CONFIGURACIÓN DE LA APP
const app = express();

// ENDPOINTS
app.get("/", (request, response) => {
  response.send("Esta es mi primera app en node");
});

// MANEJO DE ERRORES

// ARRANCAR LA APP
app.listen(PORT, () => {
  console.log(`La aplicación se ha inicializado en el puerto: ${PORT}`);
});
