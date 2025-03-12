const express = require("express");
const fs = require("fs");

const app = express();

// Middleware para configurar CORS manualmente
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permite todas las solicitudes
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// Cargar los datos desde el archivo JSON
const books = JSON.parse(fs.readFileSync("./books.json", "utf-8")).books;

app.get("/api/books", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const librosBuscados = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );

  res.json(librosBuscados);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));
