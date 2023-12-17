import React  from 'react';
import { Link } from 'react-router-dom';

const Table = ({values})=>{
    let totalPessoas = values.Homem + values.Mulher + values.Crianca;
    let carne = values.Homem * 0.40 + values.Mulher * 0.32 + values.Crianca * 0.20;
    let paoDeAlho = (values.Homem + values.Mulher)* 2 + values.Crianca * 1; 
    let carvao = totalPessoas;
    let sal = totalPessoas*0.04;
    let gelo = (totalPessoas/10)*5;
    let refrigerante = totalPessoas/5;
    let agua = totalPessoas/5;
    

    return(
        <div className="calculator">
        <div>
            <div className="result-total-guest">
                <p>Confira a lista para o seu churrasco!</p>
                <p id="total-guest">{totalPessoas} convidado(s)</p>
                <span className="guest-list">{values.Homem} homem</span>
                <span className="guest-list">{values.Mulher} mulheres</span>
                <span className="guest-list">{values.Crianca} crianças</span>
            </div>
            <div className="input-group-result">
                <div id="header-result">
                    <p>ITEM</p>
                    <p>QUANTIDADE</p>
                </div>
                <ul className="results">
                    <li><strong>Carne</strong><span>{carne.toFixed(2)} kg</span></li>
                    <li><strong>Pão de Alho</strong><span>{paoDeAlho} unidades</span></li>
                    <li><strong>Refrigerante</strong><span>{refrigerante.toFixed(0)} garrafa de 2 L</span></li>
                    <li><strong>Água</strong><span>{agua.toFixed(0)} garrafa de 1 L</span></li>
                    <li><strong>Carvão</strong><span>{carvao} kg</span></li>
                    <li><strong>Sal</strong><span>{sal.toFixed(2)} kg</span></li>
                    <li><strong>Gelo</strong><span>{gelo.toFixed(2)} kg</span></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <Link to="/">
                <button className="default-button">Novo cálculo</button>
            </Link>
        </div>
        <div className="row"></div>
            <Link to="/form">
                <button className="default-button-large">Deseja receber as informações por e-mail?</button>
            </Link>
        </div>
    )
}

export default Table;