import React, { useState } from 'react';
import './App.css';

const IMCForm = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calculadoraIMC = (e) => {
        e.preventDefault();

        const alturaEmMetros = altura / 100;
        const imcValue = peso / (alturaEmMetros * alturaEmMetros);
        setIMC(imcValue.toFixed(2));

        if (imcValue < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (imcValue < 25) {
            setClassificacao('Peso normal');
        } else if (imcValue < 30) {
            setClassificacao('Acima do peso');
        } else {
            setClassificacao('Obeso');
        }
    };

    return (
        <div className="container">
            <div className="imc-form">
                <h2>Calculadora de IMC</h2>
                <form onSubmit={calculadoraIMC}>
                    <label>
                        Altura (em cm):
                        <input
                            type="number"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Peso (em kg):
                        <input
                            type="number"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Calcular IMC</button>
                </form>
                {imc && (
                    <div>
                        <h3>Seu IMC: {imc}</h3>
                        <h3>Classificação de peso: {classificacao}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>IMC Range</th>
                                    <th>Classificação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>&lt; 18.5</td>
                                    <td>Abaixo do peso</td>
                                </tr>
                                <tr>
                                    <td>18.5 - 24.9</td>
                                    <td>Peso normal</td>
                                </tr>
                                <tr>
                                    <td>25 - 29.9</td>
                                    <td>Acima do peso</td>
                                </tr>
                                <tr>
                                    <td>&gt;= 30</td>
                                    <td>Obeso</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IMCForm;
