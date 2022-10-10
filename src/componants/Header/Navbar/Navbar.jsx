import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [bar, setBar] = useState(false)
    return (
        <div>

            <div className='bg-slate-600'>
                <div className="navbar w-11/12 mx-auto pb-4">
                    <div className="flex-1">
                        <NavLink to='/'><h1 className='text-white text-3xl font-semibold'>World Quiz Contest</h1></NavLink>
                    </div>
                    {
                        bar ? <FontAwesomeIcon className='text-white lg:hidden' icon={faClose} onClick={() => setBar(!bar)} /> :
                            <FontAwesomeIcon className='text-white lg:hidden' icon={faBars} onClick={() => setBar(!bar)} />
                    }
                    <div className="flex-none ">
                        <div className={`${bar ? "block absolute lg:static top-16  text-center px-3 pb-2 right-0 w-full bg-sky-600" : "hidden"} lg:block `}>
                            <ul className=" lg:flex lg:flex-row gap-8 text-gray-200 text-md lg:text-lg" onClick={() => setBar(false)}>
                                <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/home'>Home</NavLink></li>
                                <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/order'>quiz</NavLink></li>
                                <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/inventory'>quiz`</NavLink></li>
                                <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink to='/'>Blog</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default Navbar;