import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import data from '../repository/discussion.json';

function DiscussionSection() {

    const [discussionData, setDiscussionData] = useState(data);

    return (
        <div className={`space-y-10`}>

            {discussionData?.map((discussion, index) => (
                <div key={index} className='p-3 flex space-x-3 lg:space-x-5 rounded-md shadow-lg'>
                    <div><AccountCircleIcon style={{ fontSize: '30px' }} /></div>
                    <div className='w-full space-y-3 lg:space-y-5'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-5'>
                                <div className='font-bold text-[12px] lg:text-lg'>{discussion.title}</div>
                                <div className='bg-blue-700 px-2 lg:px-4 py-1 text-white text-[10px] lg:text-sm font-bold rounded-full'>{discussion.sector}</div>
                            </div>
                            <div className='text-blue-500 font-bold text-[8px] lg:text-sm'>{discussion.time} ago</div>
                        </div>
                        <div className='text-[10px] lg:text-sm'>{discussion.description}</div>
                        <div className='flex items-center justify-between'>
                            <div className='space-x-1 lg:space-x-2 cursor-pointer'><FavoriteBorderIcon /><span className=' text-[9px] lg:text-sm font-bold text-gray-500'>{discussion.likes}</span></div>
                            <div className='space-x-1 lg:space-x-2 cursor-pointer'><RemoveRedEyeIcon /><span className=' text-[9px] lg:text-sm font-bold text-gray-500'>{discussion.views}</span></div>
                            <div className='space-x-1 lg:space-x-2 cursor-pointer'><ChatBubbleOutlineIcon /><span className=' text-[9px] lg:text-sm font-bold text-gray-500'>{discussion.comments} comments</span></div>
                            <div className='space-x-1 lg:space-x-2 cursor-pointer'><ShareIcon /><span className=' text-[9px] lg:text-sm font-bold text-gray-500'>Share</span></div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default DiscussionSection