import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import banner from '../../assets/boutique@1.5x.jpg';
const Hero = () => {
    const heroStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        height: '83vh',
        backgroundPosition: '50% 17%',
    };

    return (
        <>
            <div className="h-[90vh] relative" style={heroStyle}>
                <div className="bg-slate-900/75 absolute bottom-[4%] left-[20%] w-[20%] text-slate-50 pl-3 py-4 pr-0">
                    <h1 className='mb-3 font-extrabold text-5xl'>Synth Species</h1>
                    <Link to="/" className='text-2xl flex items-center gap-1'><span>Learn More</span> <span><MdOutlineKeyboardDoubleArrowRight /></span></Link>
                </div>
            </div>
        </>
    );
};

export default Hero;
