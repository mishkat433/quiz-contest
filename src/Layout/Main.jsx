import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componants/Footer/Footer';
import Navbar from '../componants/Header/Navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-orange-50 '>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;