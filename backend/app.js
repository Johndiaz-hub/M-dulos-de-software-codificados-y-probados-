const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authUsuarios");

const app = express();
const PORT = 5000;

// Conexión a la base de datos MongoDB Atlas
mongoose.connect("mongodb+srv://omarfonseca11:1996@cluster0.ufmgk.mongodb.net/administradores")
  .then(() => {
    console.log("Conexión a MongoDB Atlas exitosa.");
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
