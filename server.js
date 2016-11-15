var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on("connection", function(client) {
  client.on("conectando", function (usuario) {
    usuario.status = "Conected";
    console.log(usuario);
    client.broadcast.emit("conectado", usuario)
  });
});

server.listen(3003, function() {
  console.log("El servidor ha iniciado en el puerto 3000");
});