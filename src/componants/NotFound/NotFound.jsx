import React from 'react';
import { useRouteError } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';

const NotFound = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <Navbar />
            <div className='flex flex-col  items-center mt-10 gap-3 text-lg md:text-2xl'>
                <h1 className='text-lg lg:text-3xl text-red-500 font-bold'>!Opps</h1>
                <p>An error occurred</p>
                <h4>{error.status}</h4>
                <h4>{error.message || error.statusText}</h4>
            </div>
        </div>
    );
};

export default NotFound;