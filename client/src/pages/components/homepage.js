import React, { useState } from 'react';
import DiscussionSection from './discussionSection';
import MarketSection from './marketSection';
import Sidebar from './sidebar';

function Homepage() {

    const [select, setSelect] = useState('discussion');

    return (
        <div className='flex relative'>
            <Sidebar />

            <div className='flex justify-evenly h-[100vh] overflow-y-scroll hidden lg:flex'>
                <div className='p-5 w-[60%]'>
                    <div className='p-2 py-5 mb-5 font-bold text-red-500 lg:text-xl xl:text-2xl'>DISCUSSION FORUM</div>
                    <DiscussionSection />
                </div>

                <div className='p-5 w-[30%]'>
                    <div className='p-2 py-5 mb-5 font-bold text-red-500 lg:text-xl xl:text-2xl'>MARKET STORIES</div>
                    <MarketSection/>
                </div>
            </div>

            <div className='w-[100%] h-[100vh] overflow-y-scroll block lg:hidden'>
                <div className='flex items-center justify-evenly'>
                    <div className={`w-[50%] text-center p-5 font-bold text-white text-[12px] cursor-pointer ${select == 'discussion' ? 'bg-[#0284c7]' : 'bg-[#0369a1]'}`} onClick={()=>setSelect('discussion')}>Discussion Forum</div>
                    <div className={`w-[50%] text-center p-5 font-bold text-white text-[12px] cursor-pointer ${select == 'market' ? 'bg-[#0284c7]' : 'bg-[#0369a1]'}`} onClick={()=>setSelect('market')}>Market Stories</div>
                </div>

                <div className='p-5'>
                    {select === 'discussion' ? <DiscussionSection/> : <MarketSection/>}
                </div>
            </div>
        </div>
    )
}

export default Homepage