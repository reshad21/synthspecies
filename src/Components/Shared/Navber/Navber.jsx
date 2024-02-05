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
            <div className='hidden md:block bg-[#102027]'>
                <ul className='flex justify-between items-center mx-auto md:max-w-7xl'>
                    <li className='hidden md:block'><img src={navimage} alt="" /></li>
                    <li className={`flex-1 ${activeLink === 0 ? 'active' : ''}`}>
                        <a href='#' onClick={() => handleLinkClick(0)} className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Introduction</a>
                    </li>
                    <li className={`flex-1 ${activeLink === 1 ? 'active' : ''}`}>
                        <a href="#" onClick={() => handleLinkClick(1)} className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Why Go Synth?</a>
                    </li>
                    <li className={`flex-1 ${activeLink === 2 ? 'active' : ''}`}>
                        <a href="#" onClick={() => handleLinkClick(2)} className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Features</a>
                    </li>
                    <li className={`flex-1 ${activeLink === 3 ? 'active' : ''}`}>
                        <a href="#" onClick={() => handleLinkClick(3)} className='text-center py-3 block text-xl font-normal text-white hover:bg-[#29434e]'>Resources</a>
                    </li>
                    <li className={`flex-1 ${activeLink === 4 ? 'active' : ''}`}>
                        <a href="#" onClick={() => handleLinkClick(4)} className='text-center py-3 block text-xl font-normal text-white bg-[#005cb2]'>Join the Revolution</a>
                    </li>
                    <li className='hidden md:block'><img src={navimage} alt="" /></li>
                </ul>
            </div>

            <div className="navbar md:hidden block">
                {['Introduction', 'Why Go Synth?', 'Features', 'Resources', 'Join the Revolution'].map((text, index) => (
                    <a key={index} href="#" onClick={() => handleLinkClick(index)} className={activeLink === index ? 'active' : ''}>{text}</a>
                ))}
                <div className="indicator" style={getIndicatorStyle()}></div>
            </div>
        </>
    );
};

export default Navber;
