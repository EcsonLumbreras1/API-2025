require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const app = express();
const usuarioRouter = require('./Router/usuariorouter');

// Middleware 
app.use(express.json());

app.use('/usuarios', usuarioRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
