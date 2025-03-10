import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  const [num3, setNum3] = useState(3);
  const [num4, setNum4] = useState(4);
  const [num5, setNum5] = useState(5);
  const [total, setTotal] = useState(0);
  const [primerValor, setPrimerValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [operacion, setOperacion] = useState(false);

  const handleValor = (e) => {
    if (!operacion) {
      setPrimerValor(Number(e.target.value));
    } else {
      setSegundoValor(Number(e.target.value));
    }
  };

  const handleSumar = () => {
    setOperacion(true);
  };

  const handleIgual = () => {
    setTotal(primerValor + segundoValor);
    setOperacion(false);
  };

  const handleReset = () => {
    setTotal(0);
    setPrimerValor(0);
    setSegundoValor(0);
    setOperacion(false);
  };

  return (
    <div>
      <h1>operaciones basicas</h1>
      <button onClick={handleValor} value={num1} name="num1">
        1
      </button>
      <button onClick={handleValor} value={num2} name="num2">
        2
      </button>
      <button onClick={handleValor} value={num3} name="num3">
        3
      </button>
      <button onClick={handleValor} value={num4} name="num4">
        4
      </button>
      <button onClick={handleValor} value={num5} name="num5">
        5
      </button>
      <button onClick={handleSumar}>+</button>
      <button onClick={handleIgual}>igual</button>
      <button onClick={handleReset}>Reset</button>
      <p>{primerValor}</p>
      <p>+</p>
      <p>{segundoValor}</p>
      <p>=</p>
      <p>{total}</p>
    </div>
  );
}

export default App;
