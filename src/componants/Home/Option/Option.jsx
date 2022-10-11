import React from 'react';


const Option = ({ selectedOption, checkedHandle, disable }) => {


    return (
        <div className='border border-2 h-full border-orange-500 w-full  flex  items-center gap-3 py-2 md:py-4 px-1 rounded-lg duration-300 hover:bg-orange-500 hover:text-white'>
            <input onClick={() => checkedHandle(selectedOption)} disabled={disable ? disable : undefined} name="checkbox" type="checkbox" className="checkbox bg-white text-black w-8 h-8 " />
            <label htmlFor='checkbox' >{selectedOption}</label>
        </div>
    );
};

export default Option;