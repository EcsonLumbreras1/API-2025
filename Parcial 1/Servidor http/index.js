var http = require('http');

console.log("Iniciando servidor HTTP...");

let server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
    res.end('Hello Word!');
});

server.listen(3002, () => {
    console.log("Servidor HTTP corriendo en pto 3002");
});

server.on('error', (err) => {
    console.error('Error al iniciar el servidor:', err);
});
