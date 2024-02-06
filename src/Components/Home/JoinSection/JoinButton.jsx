import React from 'react';
import { Link } from 'react-router-dom';

const JoinButton = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-8">
            <Link to="#" className='bg-[#005cb2] hover:bg-[#0078c2] shadow-md py-3 px-5 text-white text-xl rounded-lg hover:bg-[#0078c2e7 shadow-gray-700 w-[200px] text-center'>Join on Telegram</Link>
            <Link to="#" className='bg-[#005cb2] hover:bg-[#0078c2] shadow-md py-3 px-5 text-white text-xl rounded-lg hover:bg-[#0078c2e7 shadow-gray-700 w-[200px] text-center'>Join on Discord</Link>
        </div>
    );
};

export default JoinButton;