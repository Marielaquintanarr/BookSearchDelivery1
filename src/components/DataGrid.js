import '../index'

const DataGrid = ({ books }) => {  
  return (
    <div className="container">
      <div className='header'>Libro</div>
      <div className='header'>Autor</div>
      {books.map((book) => (
        <div key={book.id} className="book-row">
          <div>{book.title}</div>
          <div>{book.author}</div>
        </div>
      ))}
    </div>
  );
};

export default DataGrid;
