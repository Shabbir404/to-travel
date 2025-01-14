import React from 'react';
import '../../Css/home.css';
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import shajek from '../../images/Sajek.png';
import srimongol from '../../images/Sreemongol.png';
import sundarban from '../../images/sundorbon.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Home = () => {
    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='w-10/12 mx-auto'>
            <div className=' mt-3'>
                <div className='flex mt-20'>
                    <div className='w-8/10'>
                        <h1 className='bebas-neue-regular mt-4 text-8xl'>Cox's Bazar</h1>
                        <div className='w-8/12 mt-2'>
                            <p className='all-text-font'>
                                Cox's Bazar is a city, fishing port, tourism centre, and district
                                headquarters in southeastern Bangladesh.
                                It is
                                famous mostly for its long natural sandy beach,
                                and it ...
                            </p>
                        </div>
                        <div className='w-40 mt-8'>
                            <Link to='/booking' className='flex font-bold bg-yellow-500 text-black rounded px-8 py-2 mt-4'>
                                Booking
                                <CiLocationArrow1 className='ml-4 mt-1 font-semibold text-xl' />
                            </Link>
                        </div>
                    </div>

                    {/*right side images*/}
                    <div className="hidden w-5/12 ml-8 mt-6 md:flex mr-96">
                        <Link
                            className='w-full ml-4 flex-shrink-0 relative hover:scale-105 transition duration-200 ease-in-out'
                        >
                            <div className="">
                                <img className="w-full object-cover border-style" src={shajek} alt="Sajek" />
                                <h1 className="mt-80 text-4xl ml-2 absolute top-0 left-0 w-full bebas-neue-regular text-white p-2">Shajek</h1>
                            </div>
                        </Link>

                        <Link
                            className='w-full ml-4 flex-shrink-0 relative hover:scale-105 transition duration-200 ease-in-out'
                        >
                            <div className="">
                                <img className="w-full object-cover border-style transition duration-200  rounded-3xl" src={srimongol} alt="Sreemongol" />
                                <h1 className="mt-80 text-4xl ml-2 absolute top-0 left-0 w-full bebas-neue-regular text-white p-2">Sreemangal</h1>
                            </div>
                        </Link>

                        <Link
                            className='w-full ml-4 flex-shrink-0 relative hover:scale-105 transition duration-200 ease-in-out'
                        >
                            <div className="">
                                <img className="w-full object-cover border-style rounded-3xl" src={sundarban} alt="Sundarban" />
                                <h1 className="mt-80 text-4xl ml-2 absolute top-0 left-0 w-full bebas-neue-regular text-white p-2">Shundarban</h1>
                            </div>
                        </Link>
                    </div>
                    {/*right side images*/}

                    {/*right side images for mobile*/}
                    {/* right side images for mobilee end */}


                </div>
                {/* last icons */}
                <div>
                    <div className='flex justify-center  mt-12 text-4xl mb-10 '>
                        <Link to='/'>
                            < IoIosArrowBack className='hover:bg-yellow-600 p-2 bg-white rounded-full text-black'>
                            </IoIosArrowBack>
                        </Link>
                        <Link to='/booking'>
                            < IoIosArrowForward className='hover:bg-yellow-600 p-2 bg-white rounded-full text-black ml-2' >
                            </IoIosArrowForward>
                        </Link>
                    </div>


                </div>
                {/* last icons end */}
            </div>
        </div>
    );
};

export default Home;
