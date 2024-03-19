import React, { useState } from 'react';
import data from '../repository/market.json';

function MarketSection() {

    const [marketData, setMarketData] = useState(data);

    return (
        <div className={`space-y-10`}>

            {
                marketData?.map((market, index) => (
                    <div key={index} className='rounded-md overflow-hidden shadow-lg w-[80%] m-auto lg:w-auto'>
                        <div className='overflow-hidden'>
                            <img src={market.image} alt="" />
                        </div>
                        <div className='p-2 space-y-1'>
                            <div className='text-[14px] font-bold'>{market.title}</div>
                            <div className='text-[12px]'>{market.description}</div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default MarketSection