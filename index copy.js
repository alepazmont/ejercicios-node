// IMPORTAR MÓDULOS Y VARIABLES
const express = require("express");
const { alumnos } = require("./alumnos.js")

const PORT = 3000;
// CONFIGURACIÓN DE LA APP
const app = express();

// ENDPOINTS
app.get("/", (request, response) => {
  response.send("Esta es mi primera app en node");
});

app.get("/dragonball", (request, response) => {
  response.json({
    nombre: "Goku",
    raza: "Saiyan",
  });
});

app.get("/ciudades", (req, res) => {
  const nombre = req.query.nombre;
  const ciudades = [
    {
      nombre: "Caracas",
      pais: "Venezuela",
    },
    {
      nombre: "Cádiz",
      pais: "España",
    },
    {
      nombre: "París",
      pais: "Francia",
    },
    {
      nombre: "Buenos Aires",
      pais: "Argentina",
    },
  ];

  if (!nombre) {
    return res.send("Falta el nombre");
  }

  // Buscamos la ciudad en la lista de ciudades
  const ciudad = ciudades.find((ciudad) => ciudad.nombre === nombre);

  // Si no se encuentra la ciudad, devolvemos un mensaje de error
  if (!ciudad) {
    return res.send("La ciudad no está en la lista");
  }

  // Si se encuentra la ciudad, devolvemos la información de la ciudad
  res.json(ciudad);
});




app.get("/recetas", (req, res) => {
    const nombre = req.query.nombre;
    const data = req.query.data;
    const recetas = [
        {
            nombre: "Crema de champiñones",
            ingredientes: "Champiñones, puerros, patata, cebolla, nata, queso crema...",
            tiempo: 40
        },
        {
            nombre: "Pastel de brócoli",
            ingredientes: "Brócoli, ajo en polvo, soja, leche evaporada, queso rallado",
            tiempo: 30
        },
        {
            nombre: "Pollo asado",
            ingredientes: "Pollo, comino, pimienta, ajo-perejil, avecrem",
            tiempo: 50
        },
        {
            nombre: "Dulce de manzana",
            ingredientes: "Manzana, gelatina en polvo, edulcotante, canela",
            tiempo: 15
        },
    ];

    if (!nombre) {
        return res.send("Falta el nombre");
    }

    const recetasEncontradas = recetas.filter(receta => receta.nombre.toLowerCase().includes(nombre.toLowerCase()));

    if (recetasEncontradas.length === 0) {
        return res.send("No se encontraron recetas con ese nombre");
    }

    const respuesta = [];

    recetasEncontradas.forEach((receta) => {
        if (data === "ingredientes") {
            respuesta.push(`La receta ${receta.nombre} tiene los siguientes ingredientes: ${receta.ingredientes}`);
        } else if (data === "tiempo") {
            respuesta.push(`La receta ${receta.nombre} se hace en aproximadamente ${receta.tiempo} minutos`);
        } else {
            respuesta.push(`No existe el parámetro ${data}`);
        }
    });

    res.send(respuesta.join('\n'));
});




  

app.get("/params", (request, response) => {
  const params = request.params;
  response.send(params);
});
// MANEJO DE ERRORES

// ARRANCAR LA APP
app.listen(PORT, () => {
  console.log(`La aplicación se ha inicializado en el puerto: ${PORT}`);
});
