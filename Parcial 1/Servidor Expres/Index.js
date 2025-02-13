const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(express.json()); // Soporte para JSON en el body
app.use(express.urlencoded({ extended: true })); // Soporte para datos codificados en URL
app.use(morgan('dev')); // Middleware de logging
app.use(cors()); // Middleware para permitir CORS
app.use(express.static(__dirname + '/public')); // Servir archivos estáticos desde /public

// Middleware personalizado para interceptar todas las solicitudes
app.use((req, res, next) => {
    console.log(`Nueva solicitud: ${req.method} ${req.url}`);
    next();
});

// Ruta principal que sirve el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Ruta para devolver un mensaje con datos del cliente
app.post('/api/mensaje', (req, res) => {
    const bodyParams = req.body;
    const queryParams = req.query;
    const headers = req.headers;

    res.json({
        message: "Datos recibidos correctamente",
        bodyParams: Object.keys(bodyParams).length ? bodyParams : "No se enviaron parámetros en el body",
        queryParams: Object.keys(queryParams).length ? queryParams : "No se enviaron parámetros en la URL",
        headers: headers
    });
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ error: 'Página no encontrada' });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error en el servidor' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
