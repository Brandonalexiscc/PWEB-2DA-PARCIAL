const express=require('express'); //inyectamos dependencia de express
const mongoose = require('mongoose'); //inyectamos dependencia mongoose
const personsRoutes=require('./routes/persons'); // inyectamos el router de persons
require('dotenv').config(); // inyectamos la variable de ambiente para MONGODB_URI

mongoose.Promise = global.Promise;
const app = express(); // instanciamos aplicacion de express
const port = process.env.PORT || 3000; // configuramos el puerto de escucha

app.set('view engine', 'ejs'); // establecemos valor para el motor de vistas
app.use(express.urlencoded({extended:false}));
app.use(personsRoutes); // utilizamos el router de personas

mongoose.connect(process.env.MONGODB_URI) //conectamos a la BD
.then(()=> console.log(`Conectado a Prueba`))
.catch((error) => console.log(error));

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));