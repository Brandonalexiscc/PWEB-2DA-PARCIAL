/* Este código define un esquema Mongoose para un objeto "Persona" con propiedades de:
 nombre, edad, tipo de sangre y número de seguro social. 
También exporta el esquema como modelo para usar en otras partes de la aplicación. */
const mongoose= require ('mongoose');
let PersonSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});

module.exports = mongoose.model('Persons', PersonSchema);