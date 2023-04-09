import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    console.log(cart);
    return (
        <div className='cart'>
            <h2>Order Summary: {cart.length}</h2>
            {
                // cart.map(tshirt => <p>{tshirt.name}<button onClick={() => handleRemoveFromCart(tshirt)}>X</button></p>)
                cart.map(ts => <p>{ts.name} <button onClick={() => handleRemoveFromCart(ts)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;