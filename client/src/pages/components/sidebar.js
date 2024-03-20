import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Sidebar() {

    const [isTrue, setIsTrue] = useState(true);

    return (
        <div className={`h-[100vh] flex absolute lg:relative ${!isTrue && 'xl:w-[40%] lg:w-[60%] md:w-[40%] sm:w-[50%] w-[70%]'} ${isTrue && 'xl:w-[0px] lg:w-[0px] md:w-[0px] w-[0px]'} duration-300`}>
            <div className={`bg-[#0369a1] flex justify-between w-full`}>
                <div className={`text-white w-full ${isTrue && 'hidden'} block`}>
                    <div className='p-5 flex items-center justify-between space-x-10 lg:space-x-0'>
                        <div className='space-x-5 lg:space-x-5 flex items-center'>
                            <AccountCircleIcon style={{ fontSize: "30px" }} />
                            <span className='font-bold xl:text-xl text-md'>Hello, User</span>
                        </div>
                        <div><NotificationsIcon style={{ fontSize: "25px" }} /></div>
                    </div>
                    <hr className='my-5' />
                    <div className='p-3 space-x-5 cursor-pointer hover:bg-white hover:text-[#0369a1] duration-300'>
                        <MessageIcon />
                        <span className='text-[14px] xl:text-xl text-md font-bold'>Discussion Forum</span>
                    </div>
                    <div className='p-3 space-x-5 cursor-pointer hover:bg-white hover:text-[#0369a1] duration-300'>
                        <MonetizationOnIcon />
                        <span className='text-[14px] xl:text-xl text-md font-bold'>Market Stories</span>
                    </div>
                    <div className='p-3 pl-14 text-[14px] xl:text-xl text-md font-bold cursor-pointer hover:bg-white hover:text-[#0369a1] duration-300'>Sentiment</div>
                    <div className='p-3 pl-14 text-[14px] xl:text-xl text-md font-bold cursor-pointer hover:bg-white hover:text-[#0369a1] duration-300'>Market</div>
                    <div className='p-3 pl-14 text-[14px] xl:text-xl text-md font-bold cursor-pointer hover:bg-white hover:text-[#0369a1] duration-300'>Sector</div>
                    <div className='p-3 pl-14 text-[14px] xl:text-xl text-md font-bold cursor-pointer hover:bg-white hover:text-[#0369a1] duration-300'>Watchlist</div>
                    <div className='p-3 pl-14 text-[14px] xl:text-xl text-md font-bold cursor-pointer hover:bg-white hover:text-[#0369a1] duration-300'>Events</div>
                    <div className='p-3 pl-14 text-[14px] xl:text-xl text-md font-bold cursor-pointer hover:bg-white hover:text-[#0369a1] duration-300'>News/Interview</div>
                </div>

            </div>

            {!isTrue && <div className='h-[100vh] flex items-center bg-transparent'><div className='py-10 bg-[#0369a1] text-white cursor-pointer rounded-lg' onClick={() => setIsTrue(true)}><ArrowBackIosNewIcon /></div></div>}

            {isTrue && <div className='h-[100vh] flex items-center bg-transparen'><div div className='py-10 bg-[#0369a1] text-white cursor-pointer rounded-lg' onClick={() => setIsTrue(false)}><ArrowForwardIosIcon /></div></div>}
        </div>
    )
}

export default Sidebar