// importo el io del archibo index.js
const { io } = require('../index');


// Mensajes de Sockets
io.on('connection', client => { // Cuando un dispositivo se conecta

    console.log('Cliente conectado');

    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
     }); // Cuando ese dispositivo se desconecta

     // on = es para estar escuchando
     client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload);

        // Va a emitir un mensaje a todos los clientes conectados
        io.emit( 'mensaje', { admin: 'Nuevo mensaje'} );
     });

});