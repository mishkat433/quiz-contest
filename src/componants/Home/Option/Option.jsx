import React from 'react';

const Option = ({ unique }) => {


    return (
        <div className='border border-2 border-orange-500 flex gap-3 py-4 px-1 rounded-lg hover:bg-orange-500 hover:text-white'>
            <input type="radio" name="radio-1" className="radio bg-white" />
            <h4>{unique}</h4>
        </div>
    );
};

export default Option;