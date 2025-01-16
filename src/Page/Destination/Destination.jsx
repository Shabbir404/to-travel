import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/BlackLogo.png'
import '../../Css/destinations.css'
import { FaStar } from "react-icons/fa";
import Footer from '../../Components/Footer/Footer';

const Destination = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hotels, SetHotels] = useState([])
    useEffect(() => {
        fetch('../../../hotelData.json')
            .then(deta => deta.json())
            .then(res => SetHotels(res))
    }, [])

    return (
        <div>
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
                    <div className='w-10/12 mx-auto mt-4'>
                        <span className='all-font-small '>252 stays Apr 13-17 3 guests</span>
                        <h1 className='big-text'>Stay in Cox’s Bazar</h1>
                    </div>
                    {/* all hotel design */}
                    <div className='mt-8 w-10/12 mx-auto '>
                        {
                            hotels.slice(0, 3).map((hotel, index) => (
                                <div key={index} className='flex'>
                                    <img className='w-64 h-44 rounded-md mb-8' src={hotel.images[0]} alt="" />
                                    <div className='p-3 ml-4'>
                                        <h1 className='all-font'>{hotel.name}</h1>
                                        <div className='all-font-small flex gap-2 mt-2'>
                                            <span>{hotel.guests} Guests</span>
                                            <span>{hotel.bedroom} Bedroom</span>
                                            <span>{hotel.bath} Bath</span>
                                            <span>{hotel.beds} Beds</span>
                                        </div>
                                        <p className='all-font-small mt-1'>{hotel.facility_description}</p>
                                        <div className='flex '>
                                            <span className='flex mt-2 '>
                                                <FaStar className=' mt-1 mr-1 text-yellow-400'></FaStar>
                                                {hotel.rating}</span>
                                            <span className='all-font mt-2 ml-4'>${hotel.cost_per_night}<mark>/Night</mark></span>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }

                    </div>
                    {/* all hotel design end */}
                    <hr />
                    <div className='text-center mb-5'>
                        <button id="loadMoreBtn" class="mt-6 px-6 py-2 bg-yellow-500
                     text-white rounded-full hover:bg-yellow-600 focus:outline-none 
                     focus:ring-2 focus:ring-yellow-400">
                            Load More.....
                        </button>
                    </div>
                </div>
                <div>
                
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default Destination;