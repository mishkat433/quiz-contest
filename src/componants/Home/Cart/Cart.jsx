import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    const { name, logo, total, id } = cart;
    return (
        <div className='justify-center items-center flex'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="p-10  bg-gray-700 w-2/5"><img src={logo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p className='font-semibold'>Total Question : {total}</p>
                    <p className=''>Try to understand all the answers (Be carefull)</p>
                    <div className=" justify-start">
                        <Link to={`/cart/${id}`} className="btn btn-warning hover:btn-success">Start Quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;