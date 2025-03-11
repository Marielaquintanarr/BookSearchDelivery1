import './App.css';
import shelf from './imgs/shelf2.png'
import books from './imgs/books2.png'
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <>
      <img style={{width: '1400px', position: 'relative', top: '-120px', left: '20px'}} src={shelf}></img>
      <img style={{width: '800px', position: 'relative', top:'-800px', left:'600px'}} src={books}></img>
      <h1 style={{fontSize: '80px', fontFamily: 'Times New Roman', position:'relative', top:'-1250px', left:'250px'}}>Busca</h1>
      <h1 style={{fontSize: '80px', fontFamily: 'Times New Roman',position:'relative', left:'250px', top:'-1320px'}}>Libros</h1>
      <h1 style={{fontSize: '20px', fontWeight: 'lighter', position:'relative', top:'-1365px',left:'250px',}}>Ingresa palabras para buscar libros</h1>
      <SearchComponent />
    </>
  );
}
export default App;
