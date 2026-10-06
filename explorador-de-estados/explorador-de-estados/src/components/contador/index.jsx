import { useState } from "react";
import "./style.css";

export default function contador() {
  const [contador, setContador] = useState(0);
  const [passo, setPasso] = useState(1);

  const incrementar = () => {
    setContador((valorAnterior) => valorAnterior + passo);
  };

  const decrementar = () => {
    setContador((valorAnterior) => valorAnterior - passo);
  };

  const resetar = () => {
    setContador(0);
  };

  return (
    <div className="card-exemplo">
      <div className="card-header">
        <span className="badge">1. Estado Numérico</span>
        <h3>Contador com Passo Customizado</h3>
      </div>

      <div className="contador-display">
        <span className="numero-contador">{contador}</span>
      </div>
      <div className="passo-container">
        <label htmlFor="passo-input">Passo do incremento: </label>
        <input
          id="passo-input"
          type="number"
          min="1"
          max="10"
          value={passo}
          onChange={(e) => setPasso(Number(e.target.value) || 1)}
        />
      </div>
      <div className="botoes-grupo">
        <button className="btn btn-decrementar" onClick={decrementar}>
          - {passo}
        </button>
        <button className="btn btn-resetar" onClick={resetar}>
          Zerar
        </button>
        <button className="btn btn-incrementar" onClick={incrementar}>
          + {passo}
        </button>
      </div>
      <div className="explicacao-box">
        <code>const [contador, setContador] = useState(0);</code>
        <p>
          O estado armazena um valor numérico que é re-renderizado a cada
          alteração.
        </p>
      </div>
    </div>
  );
}
