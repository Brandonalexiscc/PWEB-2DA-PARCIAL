//Inyectamos la dependencia de express
const express = require('express');
// app que hace la función de servidor
let app = express();
// incluimos el router que viene de persons
let personRoute = require('./routes/person');

// Configuración de body-parser
app.use(express.urlencoded({ extended: false}));

// Configuración de la plantilla
app.set('view engine', 'ejs');
// Usamos el middleware para servir archivos estáticos
app.use('/assets', express.static(__dirname + '/public'));

// Usamos el router que hemos creado en el archivo persons.js 
app.use(personRoute);

// Definición del puerto de escucha
let PORT = process.env.PORT || 3000;

// Escucha de peticiones
app.listen(PORT, () => {
    console.log('escuchando en el puerto 3000');
});