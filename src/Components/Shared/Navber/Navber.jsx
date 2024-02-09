import React, { useState } from 'react';
import navimage from '../../../assets/navber.png';
import './Navber.css';

const Navber = () => {
    const [activeLink, setActiveLink] = useState(0); // Initial active link index

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const getIndicatorStyle = () => {
        const linkElements = document.querySelectorAll('.navbar a');
        if (linkElements[activeLink]) {
            const linkRect = linkElements[activeLink].getBoundingClientRect();
            return {
                left: linkRect.left + 'px',
                width: linkRect.width + 'px',
            };
        }
        return {};
    };

    return (
        <>
            <div className='hidden md:block bg-[#102027] sticky top-0 left-0 bottom-0 right-0 z-40 clear-both'>
                <ul className='flex justify-between items-center mx-auto md:max-w-7xl'>
                    <li className='hidden md:block'><img src={navimage} alt="" /></li>
                    <li className={`flex-1 ${activeLink === 0 ? 'active' : ''}`}>
                        <a href='#Introduction' onClick={() => handleLinkClick(0)} className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Introduction</a>
                    </li>
                    <li className={`flex-1 ${activeLink === 1 ? 'active' : ''}`}>
                        <a href="#goSynth" onClick={() => handleLinkClick(1)} className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Why Go Synth?</a>
                    </li>
                    <li className={`flex-1 ${activeLink === 2 ? 'active' : ''}`}>
                        <a href="#Features" onClick={() => handleLinkClick(2)} className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Features</a>
                    </li>
                    <li className={`flex-1 ${activeLink === 3 ? 'active' : ''}`}>
                        <a href="#Resources" onClick={() => handleLinkClick(3)} className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Resources</a>
                    </li>
                    <li className={`flex-1 ${activeLink === 4 ? 'active' : ''}`}>
                        <a href="#JointheRevolution" onClick={() => handleLinkClick(4)} className='text-center py-3 block text-xl font-normal text-white bg-[#005cb2]'>Join the Revolution</a>
                    </li>
                    <li className='hidden md:block'><img src={navimage} alt="" /></li>
                    {/* Indicator rendered here */}
                    <div className="indicator" style={getIndicatorStyle()}></div>
                </ul>
            </div>

            <div className="navbar md:hidden block sticky top-0 left-0 z-40">
                <a href="#Introduction" onClick={() => handleLinkClick(0)} className={activeLink === 0 ? 'active' : ''}>Introduction</a>
                <a href="#goSynth" onClick={() => handleLinkClick(1)} className={activeLink === 1 ? 'active' : ''}>Why Go Synth?</a>
                <a href="#Features" onClick={() => handleLinkClick(2)} className={activeLink === 2 ? 'active' : ''}>Features</a>
                <a href="#Resources" onClick={() => handleLinkClick(3)} className={activeLink === 3 ? 'active' : ''}>Resources</a>
                <a href="#JointheRevolution" onClick={() => handleLinkClick(4)} className={activeLink === 4 ? 'active' : ''}>Join the Revolution</a>
                <div className="indicator" style={getIndicatorStyle()}></div>
            </div>

        </>
    );
};

export default Navber;
