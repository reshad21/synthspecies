import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import banner from '../../assets/boutique@1.5x.jpg';
const Hero = () => {
    const heroStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 17%',
    };

    return (
        <>
            <div className="h-[43vh] md:h-[83vh] relative" style={heroStyle}>
                <div className="bg-slate-900/75 absolute bottom-[4%] left-[4%] md:left-[14%] w-[55%] md:w-[26%] text-slate-50 pl-3 py-4 pr-0">
                    <h1 className='mb-2 md:mb-3 font-extrabold text-3xl md:text-5xl'>Synth Species</h1>
                    <Link to="/" className='text-xl md:text-2xl flex items-center gap-1'><span>Learn More</span> <span><MdOutlineKeyboardDoubleArrowRight /></span></Link>
                </div>
            </div>
        </>
    );
};

export default Hero;
