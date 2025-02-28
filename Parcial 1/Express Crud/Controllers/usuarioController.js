require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error("Error de conexión a MySQL:", err);
    return;
  }
  console.log("✅ Conexión exitosa a MySQL");
});

// Consultar usuarios
exports.consultaUsuarios = (req, res) => {
  db.query("SELECT * FROM EjemploCrud", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Insertar usuario
exports.insertarUsuario = (req, res) => {
  const { nombre, correo } = req.body;
  db.query(
    "INSERT INTO EjemploCrud (nombre, correo) VALUES (?, ?)",
    [nombre, correo],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "Usuario agregado", id: results.insertId });
    }
  );
};

// Eliminar usuario
exports.eliminarUsuario = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM EjemploCrud WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Usuario eliminado correctamente" });
  });
};
