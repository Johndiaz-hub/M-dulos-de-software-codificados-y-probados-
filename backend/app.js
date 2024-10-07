const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authUsuarios");

const app = express();
const PORT = 5000;

// Conexión a la base de datos MongoDB
mongoose.connect("mongodb://localhost:27017/administradores")
  .then(() => {
    console.log("Conexión a MongoDB exitosa.");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });

// Configuración de CORS
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Middleware para manejar JSON
app.use(bodyParser.json());

// Rutas
app.use("/auth", authRoutes);

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
