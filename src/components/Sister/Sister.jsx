import React, { useContext } from 'react';
import './Sister.css';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>Sister</h3>
            <p>Grandpa money: {money}</p>
        </div>
    );
};

export default Sister;