import React from 'react';

const Option = ({ selectedOption, checkedHandle }) => {


    return (
        <div className='border border-2 border-orange-500 flex  items-center gap-3 py-4 px-1 rounded-lg hover:bg-orange-500 hover:text-white'>
            <input onClick={() => checkedHandle(selectedOption)} type="checkbox" className="checkbox bg-white" />
            <h4 >{selectedOption}</h4>
        </div>
    );
};

export default Option;