const express = require("express");
const { createClient } = require("@supabase/supabase-js");

const app = express();

const supabase = createClient(
  "https://hcsmwpkdncukrdgnutjv.supabase.co", 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc213cGtkbmN1a3JkZ251dGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2MDY4MzAsImV4cCI6MjA1NjE4MjgzMH0.ami2Jmhbql7Rdn1fZEh7aPh6EbCCNd6vMrqxUBF7GX8"
);

app.get("/api/books", async (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  let { data: books, error } = await supabase
    .from("books")
    .select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  const librosBuscados= books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );

  res.json(librosBuscados);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Puerto: ${PORT}`));
