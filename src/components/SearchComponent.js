import { useState, useEffect } from "react";
import DataGrid from "./DataGrid";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/books?q=${query}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        value={query}
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <DataGrid books={books} />
    </div>
  );
};

export default SearchComponent;
