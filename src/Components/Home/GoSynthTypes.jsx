import React from 'react';
import fullyModular from '../../assets/fully_moduler.png';
import openSource from '../../assets/open_source.png';
import penumaticMucles from '../../assets/penumatic_mucles.png';
import personalNineties from '../../assets/personal_nanities.png';
import sopisticatedSensor from '../../assets/sopisticated_sensor.png';
import wirelessCharging from '../../assets/wireless_charging.png';
const GoSynthTypes = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className="fully_Modular py-7 px-2">
                <div className="flex flex-col justify-center items-center gap-4 mb-4">
                    <img src={fullyModular} alt="" />
                    <h3 className='text-[#9e4c00] text-2xl'>Fully Modular</h3>
                </div>
                <p className='text-xl'><a href="#" className="text-[#005cb2]"><strong>Express your individuality.</strong></a> Be the way <strong>you</strong> want to be. Change whenever you want.</p>
            </div>
            <div className="Sophisticated_Sensors py-7 px-2">
                <div className="flex flex-col justify-center items-center gap-4 mb-4">
                    <img src={sopisticatedSensor} alt="" />
                    <h3 className='text-[#9e4c00] text-2xl'>Fully Modular</h3>
                </div>
                <p className='text-xl'>Experience true <strong>multispectral imaging</strong>. Discover what it’s like to see in infrared, ultraviolet, and more.</p>
            </div>
            <div className="Pneumatic_Muscles py-7 px-2">
                <div className="flex flex-col justify-center items-center gap-4 mb-4">
                    <img src={penumaticMucles} alt="" />
                    <h3 className='text-[#9e4c00] text-2xl'>Pneumatic Muscles</h3>
                </div>
                <p className='text-xl'><strong>Strong when you need it</strong>, gentle when you want it.</p>
            </div>
            <div className="Pneumatic_Muscles py-7 px-2">
                <div className="flex flex-col justify-center items-center gap-4 mb-4">
                    <img src={wirelessCharging} alt="" />
                    <h3 className='text-[#9e4c00] text-2xl'>Wireless Charging</h3>
                </div>
                <p className='text-xl'>Forget cable mess – <strong className="text-[#005cb2]">recharge on the go</strong>. Never run out of juice, no matter where you are*.</p>
            </div>
            <div className="Pneumatic_Muscles py-7 px-2">
                <div className="flex flex-col justify-center items-center gap-4 mb-4">
                    <img src={personalNineties} alt="" />
                    <h3 className='text-[#9e4c00] text-2xl'>Personal Nanites</h3>
                </div>
                <p className='text-xl'>Perform <strong>repairs and modifications</strong> in real time. Update your <a href="#" className="text-[#005cb2]"><strong>blueprint</strong></a> without the need to reboot.</p>
            </div>
            <div className="Pneumatic_Muscles py-7 px-2">
                <div className="flex flex-col justify-center items-center gap-4 mb-4">
                    <img src={openSource} alt="" />
                    <h3 className='text-[#9e4c00] text-2xl'>Open Source</h3>
                </div>
                <p className='text-xl'>Hack yourself to <strong>unlock new modes of being</strong>. Contribute to a growing <a href="#" className="text-[#005cb2]"><strong>community</strong></a>.</p>
            </div>
        </div>
    );
};

export default GoSynthTypes;