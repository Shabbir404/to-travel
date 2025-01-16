import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/BlackLogo.png'
const Destination = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div>
                <div className='w-10/12 mx-auto'>
                    {/* Desktop View */}
                    <div className='hidden md:flex'>
                        <div className='mt-2'>
                            <Link to='/'>
                                <img className='h-32 w-60' src={logo} alt="" />
                            </Link>
                        </div>
                        <div className='mt-12 space-x-12 text-font flex ml-auto'>
                            <div className='mt-2'>
                                <Link className='ml-16 text-black'>Destination</Link>
                                <Link className='ml-16 text-black'>Blog</Link>
                                <Link className='ml-16 text-black'>Contact</Link>
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
                                className='text-black text-2xl'
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                ☰
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div>
                                <div className='md:hidden bg-black bg-opacity-90 mt-2 p-4'>
                                    <Link className='block text-black py-2'>Destination</Link>
                                    <Link className='block text-black py-2'>Blog</Link>
                                    <Link className='block text-black py-2'>Contact</Link>
                                    <button className='bg-yellow-500 text-black rounded px-8 py-2 mt-2 w-full'>Login</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <hr />
                </div>

            </div>

        </div>
    );
};

export default Destination;