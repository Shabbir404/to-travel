import React, { useState } from 'react';
import logo from '../../assets/LogoT.png'
import '../../Css/header.css'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='w-10/12 mx-auto'>
            {/* Desktop View */}
            <div className='hidden md:flex'>
                <div className='mt-2'>
                    <Link to='/'>
                        <img className='h-32 w-60' src={logo} alt="" />
                    </Link>
                </div>
                <div className="size-10 ml-20 mt-12 flex items-center space-x-2 
                transparent-input p-2 rounded w-96">
                    <CiSearch className="text-white text-xl font-bold" />
                    <input type="text" placeholder="Search your Destination..." className="bg-transparent
                     placeholder-white text-white border-none focus:outline-none w-38 h-8 text-sm" />
                </div>
                <div className='mt-12 space-x-12 text-font flex ml-auto'>
                    <div className='mt-2'>
                        {/* <Link className='ml-16 text-white'>News</Link> */}
                        <Link className='ml-16 text-white'>Destination</Link>
                        <Link className='ml-16 text-white'>Blog</Link>
                        <Link className='ml-16 text-white'>Contact</Link>
                    </div>
                    <div>
                        <button className='bg-yellow-500 text-black rounded px-8 py-2'>Login</button>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div>
                <div className='flex items-center justify-between md:hidden'>
                    <Link>
                        <img className='w-48 h-20' src={logo} alt="" />
                    </Link>
                    <button
                        className='text-white text-2xl'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div>

                        <div className='md:hidden bg-black bg-opacity-90 mt-2 p-4'>
                            <div className="flex items-center space-x-2 transparent-input p-2 rounded w-6/12">
                                <CiSearch className="text-white text-xl font-bold" />
                                <input type="text" placeholder="Search..." className="bg-transparent placeholder-white text-white border-none focus:outline-none w-full h-8 text-sm" />

                                {/* have to work on this search bar */}
                            </div>
                            <Link className='block text-white py-2'>News</Link>
                            <Link className='block text-white py-2'>Destination</Link>
                            <Link className='block text-white py-2'>Blog</Link>
                            <Link className='block text-white py-2'>Contact</Link>
                            <button className='bg-yellow-500 text-black rounded px-8 py-2 mt-2 w-full'>Login</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;