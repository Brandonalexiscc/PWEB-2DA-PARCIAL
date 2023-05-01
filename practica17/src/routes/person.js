const express = require('express') //Importamos la dependencia.
let router = express.Router();
// Instalación del "router" al que asociaremos todas las turas.

// recoge los datos para renderizarlos en otra vista.
router.get('/student', (req, res) => {
    let t = req.params.id;
    res.render('student');
});

// post solo despacha el contenido del BODY mediante
// el metodo send.
router.post('/addStudent', (req, res) => {
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    });
});

router.post('/personJson', express.json({type:'*/*'}), (req, res) => {
    console.log(`nombre: ${req.body.nombre}
                apellido: ${req.body.apellido}`);
});

router.get('/testJson', (req, res) => {
    res.render('testJson');
});
// Exportamos el router para que pueda ser usado en el servidor.
module.exports = router;