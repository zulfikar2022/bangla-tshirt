import React from 'react';
import './Cusin.css';
import Friend from '../Friend/Friend';

const Cusin = ({children,hasFriend,ring}) => {
    return (
        <div>
            <h3>Cousin</h3>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cusin;