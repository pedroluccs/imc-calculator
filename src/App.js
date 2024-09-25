import React, {useState} from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [valorIMC, setValorIMC] = useState(0);
  const [classificacao, setClassificacao] = useState('');

function mudancaPeso(evt) {
    setPeso(evt.target.value);
  }

  function calcularIMC(evt) {
    let imc;
    imc = peso / (altura * altura);
    imc = parseFloat(imc.toFixed(2));
    setValorIMC(imc);

    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      setClassificacao('Obesidade Grau I');
    } else if (imc >= 35 && imc <= 39.9) {
      setClassificacao('Obesidade Grau II');
    } else if (imc >= 40) {
      setClassificacao('Obesidade Grau III');
    }
}

  return (
    <div class="container">
      <div class="App">
      <h1>Calculadora de IMC</h1>

    <form>
      <label htmlFor='peso'>Peso:</label><br/>
      <input type='number' name='peso' onChange={mudancaPeso} value={peso} id='peso'/>

      <br/><br/>

      <label htmlFor='altura'>Altura:</label><br/>
      <input type='number' name='altura' onChange={e => setAltura(e.target.value)} value={altura} id='altura'/>

      <br/><br/>

      <input class="button" type='button' value='Calcular IMC' onClick={calcularIMC}/>

      <br/><br/>

      <b>Seu IMC</b>: {valorIMC}
      <p>Classificação: {classificacao}</p>

    </form>
    </div>
    </div>


  );
}

export default App;
