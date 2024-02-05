import React from 'react';
import navimage from '../../../assets/navber.png';
import './Navber.css';
const Navber = () => {
    return (
        <>
            <div className='hidden md:block bg-[#102027]'>
                <ul className='flex justify-between items-center mx-auto md:max-w-7xl'>
                    <li className='hidden md:block'><img src={navimage} alt="" /></li>
                    <li className='flex-1'><a href='#' className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Introduction</a></li>
                    <li className='flex-1'><a href="#" className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Why Go Synth?</a></li>
                    <li className='flex-1'><a href="#" className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Features</a></li>
                    <li className='flex-1'><a href="#" className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Resources</a></li>
                    <li className='flex-1'><a href="#" className='text-center py-3 block text-xl font-normal text-white bg-[#005cb2]'>Join the Revolution</a></li>
                    <li className='hidden md:block'><img src={navimage} alt="" /></li>
                </ul>
            </div>

            <div className="navbar md:hidden block">
                <a href="#">Introduction</a>
                <a href="#">Why Go Synth?</a>
                <a href="#">Features</a>
                <a href="#">Resources</a>
                <a href="#" className="bg-[#005cb2]">Join the Revolution</a>
            </div>

        </>
    );
};

export default Navber;