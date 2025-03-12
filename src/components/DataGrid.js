import '../index'

const DataGrid = ({ books }) => {  
  return (
    <div className="container">
      <div className='header'>Libro</div>
      <div className='header'>Autor</div>
      <div className='header'>Genero</div>
      <div className='header'>Fecha de Publicacion</div>
      <div className='header'>ISBN</div>
      <div className='header'>Disponibilidad</div>
      {books.map((book) => (
        <div key={book.isbn} className="book-row">
          <div>{book.title}</div>
          <div>{book.author}</div>
          <div>{book.genre}</div>
          <div>{book.published_date}</div>
          <div>{book.isbn}</div>
          <div className={`availability ${book.availability ? "available" : "unavailable"}`}>
            {book.availability !== undefined ? (book.availability ? "Disponible" : "No disponible") : "N/A"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataGrid;
