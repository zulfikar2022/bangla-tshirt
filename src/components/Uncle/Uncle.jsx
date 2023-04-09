import React, { useContext } from 'react';
import './Uncle.css';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ring}) => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>Grandpa money: {money}</small></p>
            <button onClick={() => setMoney(money+1000)}>Send 1000tk</button>
            <section className='flex'>
                <Cusin hasFriend={true}>Nabil</Cusin>
                <Cusin>Nabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;