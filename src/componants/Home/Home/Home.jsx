import React from 'react';
import HeaderMain from '../../Header/HeaderMain/HeaderMain';
import Carts from '../Carts/Carts';

const Home = () => {
    return (
        <div className='pb-20'>
            <HeaderMain />
            <Carts />
        </div>
    );
};

export default Home;