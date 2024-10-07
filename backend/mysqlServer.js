/*const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// Configuración de CORS para permitir peticiones desde el frontend
const corsOptions = {
  origin: "http://localhost:5173", 
  credentials: true,
};
app.use(cors(corsOptions));

// Conexión a la base de datos MySQL
const conexion = mysql2.createConnection({
  host: "localhost",
  database: "administradores",
  user: "root",
  password: "1996",
});

conexion.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos MySQL exitosa.");
});

// Función para generar un token JWT
const generarToken = (id) => {
  return jwt.sign({ id }, "tu_secreto", { expiresIn: "1h" });
};

// Ruta de registro
app.post("/register", async (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json("Por favor, completa todos los campos.");
  }

  try {
    const query = "SELECT * FROM administradores WHERE email = ?";
    conexion.query(query, [email], async (err, data) => {
      if (err) return res.status(500).json("Error en la consulta.");

      if (data.length > 0) {
        return res.status(400).json("El usuario ya está registrado.");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const insertQuery = "INSERT INTO administradores (nombre, email, contraseña) VALUES (?, ?, ?)";
      conexion.query(insertQuery, [nombre, email, hashedPassword], (err, result) => {
        if (err) {
          return res.status(500).json("Error al registrar usuario.");
        }

        const token = generarToken(result.insertId);
        return res.status(201).json({ message: "Usuario registrado exitosamente.", token });
      });
    });
  } catch (error) {
    return res.status(500).json("Error en el servidor.");
  }
});

// Ruta de inicio de sesión
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("Por favor, proporciona email y contraseña.");
  }

  const query = "SELECT * FROM administradores WHERE email = ?";
  conexion.query(query, [email], async (err, data) => {
    if (err) {
      return res.status(500).json("Error en el servidor.");
    }

    if (data.length === 0) {
      return res.status(404).json("Usuario no encontrado.");
    }

    const isMatch = await bcrypt.compare(password, data[0].contraseña);
    if (!isMatch) {
      return res.status(401).json("Contraseña incorrecta.");
    }

    const token = generarToken(data[0].id);
    return res.json({ message: "Inicio de sesión exitoso.", token });
  });
});

// Poner a escuchar al servidor
app.listen(8081, () => {
  console.log("Servidor escuchando en el puerto 8081...");
}); */
