import React from 'react';

const Cart = (props) => {

    const cart = props.cart;

    // let or reduce => Module 34.5-6

    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.population;
    }



    return (
        <div>
            <h2>This is cart: {cart.length}</h2>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;