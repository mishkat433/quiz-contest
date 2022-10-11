import React from 'react';


const Option = ({ selectedOption, checkedHandle, disable }) => {


    return (
        <div className='border border-2 border-orange-500 flex  items-center gap-3 py-4 px-1 rounded-lg hover:bg-orange-500 hover:text-white'>
            <input onClick={() => checkedHandle(selectedOption)} disabled={disable ? disable : undefined} name="checkbox" type="checkbox" className="checkbox bg-white w-8 h-8" />
            <label htmlFor='checkbox' >{selectedOption}</label>
        </div>
    );
};

export default Option;