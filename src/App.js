import ContenedorPublicidad from './components/ContenedorPublicidad';
import './App.css';
import TiraPeliculas from './components/TiraPeliculas';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <ContenedorPublicidad>
            <h2>Esto es una publicidad</h2>
          </ContenedorPublicidad>

          <TiraPeliculas />
          <Contador inicial= {0} />

          <ContenedorPublicidad>
            <ul>
              <li>Publicidad 1</li>
              <li>Publicidad 2</li>
              <li>Publicidad 3</li>
            </ul>
          </ContenedorPublicidad>
        </main>
      </header>
    </div>
  );
}

export default App;
