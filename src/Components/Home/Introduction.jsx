import React, { forwardRef } from 'react';
import { useSmoothNavber } from '../../Context/NavberProvider';
import peri from '../../assets/perl.jpg';
const Introduction = () => {
    const { ref } = useSmoothNavber()
    console.log(ref);
    return (
        <div className='max-w-5xl mx-auto' id='Introduction' ref={ref}>
            <p className='py-5 text-lg text-[#222]  px-3'>Synths are <span className='font-bold'>a fictional, synthetic species set in a science fiction universe</span> and created by <a href='#' className='text-[#005cb2]'>Vader-San</a>. They are an open and free to use species that can be incorporated into any science fiction universe without restrictions.</p>
            <div className="md:flex gap-5">
                <p className='text-lg text-[#222] px-3'>Synths are open source and don’t require any set canon to be followed, but a pre-built, ready to go canon is available for anyone who wishes to contribute to an active universe. <br /> <br />

                    There are no limits to the number of Synth characters that can be created and no approval is required, so you can go wild with your designs and be as creative as you like. <br /><br />

                    Sound interesting? The Synth community awaits you.</p>
                <img src={peri} alt="" className='w-full md:w-[350px] h-[495px] rounded-xl' />
            </div>
        </div>
    );
};

export default forwardRef(Introduction);