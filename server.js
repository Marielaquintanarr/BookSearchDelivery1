const express = require("express");
const fs = require("fs");

const app = express();

const books = JSON.parse(fs.readFileSync("./books.json", "utf-8")).books;

app.get("/api/books", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const librosBuscados = books.filter(book =>
    (book.title?.toLowerCase().includes(query)) ||
    (book.author?.toLowerCase().includes(query)) ||
    (book.genre?.toLowerCase().includes(query)) 
  );

  res.json(librosBuscados);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));



