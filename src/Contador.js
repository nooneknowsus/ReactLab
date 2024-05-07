import React, { useState } from 'react';
import './styles.css';
import girlImage from './girl.png';
import boyImage from './boy.png';


function Contador() {
    const [total, setTotal] = useState(0);
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);

    const addHomem = () => {
        setHomens(homens + 1);
        setTotal(total + 1);
    };

    const removeHomem = () => {
        if (homens > 0) {
            setHomens(homens - 1);
            setTotal(total - 1);
        }
    };

    const addMulher = () => {
        setMulheres(mulheres + 1);
        setTotal(total + 1);
    };

    const removeMulher = () => {
        if (mulheres > 0) {
            setMulheres(mulheres - 1);
            setTotal(total - 1);
        }
    };

    const redefinirContador = () => {
        setTotal(0);
        setHomens(0);
        setMulheres(0);
    };

    return (
        <div className="contadorDiv">
            
            <h2>TOTAL</h2>
            <p id="total" className="badge badge-light total-number">{total}</p>
            
            <h2>Homens</h2>
            <p id="homens" className="badge badge-light">{homens}</p>
            <img src={boyImage} className="icones" alt="Homem" />
            <button className="btn btn-success ml-2" onClick={addHomem}>+</button>
            <button className="btn btn-danger ml-1" onClick={removeHomem}>-</button>
            
            <h2>Mulheres</h2>
            <p id="mulheres" className="badge badge-light">{mulheres}</p>
            <img src={girlImage} className="icones" alt="Mulher" />
            <button className="btn btn-success ml-2" onClick={addMulher}>+</button>
            <button className="btn btn-danger ml-1" onClick={removeMulher}>-</button>
            
            <div className="button-container">
                <button className="btn btn-secondary ml-1" onClick={redefinirContador}>Redefinir</button>
            </div>
        </div>
    );
}

export default Contador;
