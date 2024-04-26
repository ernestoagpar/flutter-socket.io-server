const express = require('express');
const path = require('path');
//asi como está va a leer el .env y establecer las variables de entorno
require('dotenv').config();

// App de Express
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');






// Path público
const publicPath = path.resolve( __dirname, 'public' );
// __dirname va apuntar a donde sea que este montado mi servidor
// y vzmos apuntar a la carpeta 'public'

app.use( express.static( publicPath ) );

server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en el puerto', process.env.PORT);

});