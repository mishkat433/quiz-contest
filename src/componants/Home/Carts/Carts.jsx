import React, { useEffect, useState, CSSProperties } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Cart from '../Cart/Cart';

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


const Carts = () => {
    const [carts, setCarts] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            fetch('https://openapi.programming-hero.com/api/quiz')
                .then(res => res.json())
                .then(data => setCarts(data.data))
        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setLoading(false)
        }
    }, [])
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-lg md:text-5xl mb-14 text-center font-semibold text-orange-600 '>Participate with...</h1>
            <ClipLoader
                loading={loading}
                cssOverride={override}
                size={120}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <div className=' grid  lg:grid-cols-2 gap-10'>
                {
                    carts.map(cart => <Cart cart={cart} key={cart.id} />)
                }
            </div>
        </div>
    );
};

export default Carts;