import React from 'react';
import gosynth from '../../assets/go-synth.jpg';
import GoSynthTypes from './GoSynthTypes';
const WhyGoSynth = () => {
    return (
        <div className="bg-[#ffd54f]">
            <div className="max-w-5xl mx-auto">
                <h2 className='text-4xl font-bold py-7 text-[#9e4c00]'>Why Go Synth?</h2>
                <img src={gosynth} alt="" className='shadow-lg rounded-xl' />
                <GoSynthTypes />
            </div>
        </div>
    );
};

export default WhyGoSynth;