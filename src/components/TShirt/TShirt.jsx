import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt,handleAddToCart}) => {
    
    // const {tshirt,handleAddToCart} = props; 
    const {picture,name,price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: <small>${price}</small></p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default TShirt;