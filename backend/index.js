const express = require('express'); // apuntes de porque require y no import
require('dotenv').config();



// Crear el servidor de express
const app = express();


// Directorio Público
app.use( express.static('public') ); //apuntes use


// Lectura y parseo del body
app.use( express.json() );


// Rutas
app.use('/api/auth', require('./routes/auth') ); // esto es un middleware
// TODO: CRUD: Eventos



// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
