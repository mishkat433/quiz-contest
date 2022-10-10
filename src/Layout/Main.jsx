import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../componants/Header/Navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-orange-50 '>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;