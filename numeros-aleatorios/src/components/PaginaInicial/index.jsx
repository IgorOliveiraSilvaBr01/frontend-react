import React, { useState } from 'react';
import './style.css';

export default function PaginaInicial() {
    const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);

    const gerarNumero = () => {
        const novoNumero = Math.floor(Math.random() * 100);
        setNumeroAleatorio(novoNumero)
    };

    return(
        <div className='conteudo-centralizado'>
            <h1>Gerador de números aleatórios</h1>
            <h2>{ numeroAleatorio }</h2>
            <div className='area-botao'>
                <label>Click no botão para gerar um número aleatório</label>
                <button onClick={ gerarNumero }>Gerar número</button>
            </div>
        </div>
    );
}