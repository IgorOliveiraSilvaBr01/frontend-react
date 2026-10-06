import Contador from './components/contador';
import './App.css';

export default function App() {
  return (

    <div className="app-container">
      <header className="app-header">
        <h1>Explorador de Estados do React</h1>
        <p>Aprenda na prática os 4 principais padrões de uso do hook <span>useState</span></p>
      </header>

      <main className="grid-exemplos">
        <Contador />
      </main>

      <footer className="app-footer">
        <p>Demonstrando o uso do React hook useState</p>  
      </footer>
    </div>

  )
}