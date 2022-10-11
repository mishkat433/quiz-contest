import React from 'react';
import winnerImage from "../../../Images/winner.png"

const HeaderMain = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto gap-5 py-10 md:h-[90vh]'>
            <div className='md:w-1/2'>
                <img className='w-full md:w-3/5' src={winnerImage} alt="" />
            </div>
            <div className='md:w-1/2 text-center'>
                <h1 className='text-5xl font-semibold mb-5 text-orange-600'>World Quiz Contest</h1>
                <p className=' text-lg '>World Quiz Contest is an international Quiz contest, This quiz will be based on computer program. Big programmers from different countries will participate in this quiz. So welcome to participate with a winning attitude. </p>
            </div>
        </div>
    );
};

export default HeaderMain;