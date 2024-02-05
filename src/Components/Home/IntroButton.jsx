import React from 'react';
import { Link } from 'react-router-dom';

const IntroButton = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-8">
                <Link to="#" className='bg-[#0078c2] py-3 px-5 text-white text-lg rounded-lg hover:bg-[#0078c2e7 shadow-gray-700 w-[200px] text-center'>Join the Revolution</Link>
                <Link to="#" className='bg-[#fed44f] py-3 px-6 text-lg rounded-lg hover:bg-[#0078c2e7 shadow-gray-700 w-[200px] text-center'>Learn More ››</Link>
            </div>
        </div>
    );
};

export default IntroButton;