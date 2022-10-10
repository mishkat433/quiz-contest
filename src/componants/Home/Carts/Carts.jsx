import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Carts = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        try {
            fetch('https://openapi.programming-hero.com/api/quiz')
                .then(res => res.json())
                .then(data => setCarts(data.data))
        }
        catch (err) {
            console.log(err.message);
        }

    }, [])
    console.log(carts);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-lg md:text-5xl mb-14 text-center font-semibold text-orange-600 underline'>Participate with...</h1>
            <div className=' grid  lg:grid-cols-2 gap-10'>
                {
                    carts.map(cart => <Cart cart={cart} key={cart.id} />)
                }
            </div>
        </div>
    );
};

export default Carts;