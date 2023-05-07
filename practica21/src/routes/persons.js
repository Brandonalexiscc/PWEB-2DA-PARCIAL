const express= require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');
/* This code defines a route for a GET request to the endpoint '/gente'. When a client makes a GET
request to this endpoint, the code uses the Mongoose library to retrieve all documents from the
'persons' collection in the database and stores them in the 'Persons' variable. Then, it sends a
JSON response to the client containing the retrieved documents. The use of the 'async' keyword and
'await' operator ensures that the code waits for the database query to complete before sending the
response. */

//creamos ruta de /gente
router.get('/gente', async(req, res) =>{
    const persons = await Person.find({});
    res.render('person', {persons});
})

//metodo para eliminar personas del registro 


// método para editar personas del registro
router.get('/findById/:id', (req, res) => {
    Person.findById(req.params.id)
    .then((myPerson) =>{res.render('personUpdate', {myPerson})})
    .catch((err) =>{res.json({message:err})});
});

// Ruta PARA actualizar la información para guardarla y enviarla a la BD
//Utilizamos findByIdUpdate para buscar y actualizar el documento seleccionado 
router.post('/updatePerson', (req, res) => {
    Person.findByIdAndUpdate(req.body.objId,
        {
            nombre: req.body.nombre,
            edad: req.body.edad,
            tipoSangre: req.body.tipoSangre,
            nss: req.body.nss
    })
    .then((data) =>{res.redirect('/gente')})
    .catch((err) =>{res.json({message:err})});
});

//ruta para acceder al formulario de addPerson
router.get('/addPerson', (req, res) => {
    res.render('addPerson');
});

//ruta para agregar personas al registro y envio de datos a la BD
router.post('/addPerson', (req, res) =>{
    const newPerson = Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });

    //Guardamos en la BD con save()
    newPerson
    .save()
    .then((data) =>{res.redirect('/gente')})
    .catch((err) =>{res.json({message:err})});
})

module.exports=router;