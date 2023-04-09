import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message ;
    if(cart.length===0) {
        message= <p>Please add something to your Cart</p>
    }
    else{
        message = <div> 
            <h5>Esssshhhh!!!!</h5>
            <p>Tui to borolok lagechi</p>
            </div>
    }
    return (
        <div className='cart'>
            <h2 className={cart.length === 2 ? 'blue' : 'red'}>Order Summary: {cart.length} </h2>{message}
            < p className={`bold orange`}>Something</p>
            {cart.length>2 ? <small className='yellow'>Buy more</small>:<small>Poor fellow</small>}
            {
                // cart.map(tshirt => <p>{tshirt.name}<button onClick={() => handleRemoveFromCart(tshirt)}>X</button></p>)
                cart.map(ts => <p>{ts.name} <button onClick={() => handleRemoveFromCart(ts)}>X</button></p>)
            }
            {
                cart.length===2 && <p>Double choice</p>
            }
        </div>
    );
};

export default Cart;

// CONDITIONAL RENDERING 
    // 1. use if...else to set a variable that will contain an element, component or anything else.
    // 2. Using ternary operator (?) for rendering an specific element based on some condition.
    // 3. logical (and) &&: If the condition is true then the next thing will be displayed
    // 4. logical (or) ||: If the condition is false then the next thing will be displayed

// CONDITIONAL CSS CLASS
    // 1. Use ternary operator
    // 2. Use ternary operator inside template string