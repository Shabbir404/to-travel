import React, { useState } from 'react';

// import css from Home-css
import '../../Css/home.css';
// import css from booking-css
import '../../Css/booking.css'
import { Link } from 'react-router-dom';

const Booking = () => {

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
                    <div className='w-5/6'>
                        <div className=''>
                            <div className='bg-white rounded-sm'>
                                <div className='p-6'>
                                    <span className='date-picker-small-text'>Orgin</span>
                                    <br />
                                    <div className=' '>
                                        <input className='mt-1 cursor-pointer rounded placeholder:font-bold
                                     placeholder-black input-feild-bg ml-1 pl-9 pr-20 px-3 py-3'
                                            placeholder='Dhaka' type="text" name="" id="" />
                                    </div>
                                    <div className='mt-3'>
                                        <span className=' date-picker-small-text'>Destination</span>
                                        <div className=''>
                                            <input className='mt-1 cursor-pointer rounded placeholder:font-bold
                                     placeholder-black input-feild-bg ml-1 pl-9 pr-20 px-3 py-3'
                                                placeholder='Cox’s Bazar' type="text" name="" id="" />
                                        </div>
                                    </div>
                                    {/* flex */}
                                    <div className='flex gap-3'>
                                        <div className='mt-3 '>
                                            <span className=' date-picker-small-text'>From</span>
                                            <br />
                                            <input className='mt-1 cursor-pointer w-full rounded placeholder:font-bold
                                     placeholder-black input-feild-bg ml-1  px-3 py-3'
                                                placeholder='1/09' type="text" name="" id="" />

                                        </div>
                                        <div className='mt-3'>
                                            <span className=' date-picker-small-text'>To</span>
                                            <br />
                                            <input className='mt-1 cursor-pointer w-full rounded placeholder:font-bold
                                          placeholder-black input-feild-bg ml-1 px-3 py-3'
                                                placeholder='12/09' type="text" name="" id="" />
                                        </div>
                                    </div>
                                    {/* flex end */}
                                    <Link className="mt-4 w-full btn btn-warning">Start Booking</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* date-picker-box design end */}
                </div>

            </div>


        </div>
    );
};

export default Booking;