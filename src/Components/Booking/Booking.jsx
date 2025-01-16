import React, { useState } from 'react';
import { MdOutlineDateRange } from "react-icons/md";
// import css from Home-css
import '../../Css/home.css';
// import css from booking-css
import '../../Css/booking.css'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Booking = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className='w-10/12 mx-auto mt-20'>
            <div className=''>
                {/* main text */}
                <div className='w-8/10 flex '>
                    <div>
                        <h1 className='bebas-neue-regular md:mt-4 md:text-8xl'>Cox's Bazar</h1>
                        <div className='w-8/12 mt-2 '>
                            <p className='all-text-font'>
                                Cox’s Bazar is a town on the southeast coast of Bangladesh.
                                It’s known for its very long, sandy beachfront, stretching
                                from Sea Beach in the north to Kolatoli Beach in the south.
                                Aggameda Khyang monastery is home to bronze statues and
                                centuries-old Buddhist manuscripts. South of town, the tropical
                                rainforest of Himchari National Park has waterfalls and many
                                birds. North, sea turtles breed on nearby Sonadia Island.
                            </p>
                        </div>
                    </div>
                    {/* date-picker box design */}
                    <div className='w-full'>
                        <div className=''>
                            <div className='bg-white rounded-sm'>
                                <div className='p-6'>
                                    <span className='date-picker-small-text'>Orgin</span>
                                    <br />
                                    <div className=' '>
                                        <input className='mt-1 cursor-pointer w-full rounded placeholder:font-bold
                                     placeholder-black input-feild-bg ml-1 pl-9 pr-20 px-3 py-3'
                                            placeholder='Dhaka' type="text" name="" id="" />
                                    </div>
                                    <div className='mt-3'>
                                        <span className=' date-picker-small-text'>Destination</span>
                                        <div className=''>
                                            <input className='mt-1 cursor-pointer w-full
                                             rounded placeholder:font-bold
                                           placeholder-black input-feild-bg ml-1 pl-9 pr-20 px-3 py-3'
                                                placeholder='Cox’s Bazar' type="text" name="" id="" />
                                        </div>
                                    </div>
                                    {/* flex */}
                                    <div className="flex gap-3">
                                        <div className="mt-3">
                                            <span className="text-sm date-picker-small-text text-gray-600">From</span>
                                            <div className="relative">
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    selectsStart
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    placeholderText="01/09"
                                                    className="w-full placeholder-black placeholder:font-bold text-black font-semibold  rounded-md py-3 px-3 cursor-pointer bg-gray-50"
                                                    dateFormat="dd/MM/yy"
                                                />
                                                <MdOutlineDateRange className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl text-black" />
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <span className="text-sm date-picker-small-text text-gray-600">To</span>
                                            <div className="relative">
                                                <DatePicker
                                                    selected={endDate}
                                                    onChange={(date) => setEndDate(date)}
                                                    selectsEnd
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    minDate={startDate}
                                                    placeholderText="12/09"
                                                    className="w-full placeholder-black text-black font-semibold placeholder:font-bold rounded-md py-3 px-3 cursor-pointer bg-gray-50"
                                                    dateFormat="dd/MM/yy"
                                                />
                                                <MdOutlineDateRange className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl text-black" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* flex end */}
                                    <Link to='/destinations' className="mt-4 w-full btn btn-warning">Start Booking</Link>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* date-picker-box design end */}
                </div>

            </div>
            {/* last icons */}
            <div>
                <div className='flex justify-center mt-12 text-4xl mb-10 center-container'>
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
    );
};

export default Booking;