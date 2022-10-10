import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-700'>
            <h4 className='text-center text-lg text-white p-2'>Developed by Mishk@t - {new Date().getFullYear()}</h4>
        </div>
    );
};

export default Footer;