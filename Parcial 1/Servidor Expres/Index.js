const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const xmlparser = require('express-xml-bodyparser');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3002;

// Definir la carpeta de almacenamiento de archivos
const folder = path.join(__dirname, 'ArchivosRec/');
const upload = multer({ dest: folder });

// Middleware
app.use('/', (req, res, next) => {
    console.log("-- Petición recibida --");
    next();
}, (req, res, next) => {
    console.log("-- 2da función middleware --");
    next();
});

app.use(express.json());
app.use(express.text());
app.use(xmlparser());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(__dirname + '/public'));

// Ruta principal que sirve el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Ruta para manejar peticiones con JSON o XML
app.post('/api/mensaje',upload.single('archivo'), (req, res) => {
    const contentType = req.headers['content-type'];
    let bodyParams = req.body;

    if (contentType.includes('xml')) {
        bodyParams = JSON.stringify(req.body);
    }

    console.log("📩 Se recibió un formulario:", bodyParams);

    res.json({
        message: "Datos recibidos correctamente",
        bodyParams: Object.keys(bodyParams).length ? bodyParams : "No se enviaron parámetros en el body",
        headers: req.headers
    });
});

// Ruta para recibir archivos con multer
app.post('/api/upload', upload.single('archivo'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No se envió ningún archivo" });
    }
    console.log("📂 Archivo recibido:", req.file.filename, "| Ruta:", req.file.path);
    res.json({
        message: "Archivo subido correctamente",
        filename: req.file.filename,
        path: req.file.path
    });
});

// Ruta de prueba con parámetros
app.post('/sistemas/:control', (req, res) => {
    console.log(req.body);
    res.send('Hello world');
});

// Ruta de prueba con PATCH
app.patch('/materia', (req, res) => {
    console.log(req.body);
    res.send('Hello world');
});

// Ruta para recibir datos en prefectos
app.post('/prefectos', (req, res) => {
    console.log("📩 Datos recibidos en /prefectos:", req.body);
    res.send('Hello world');
});

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).send("Error 404 - Página no encontrada");
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error en el servidor' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
