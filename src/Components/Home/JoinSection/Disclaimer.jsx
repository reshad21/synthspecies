import React from 'react';
import { Link } from 'react-router-dom';
import hunkSynth from '../../../assets/hunk-synth.jpg';
import './Disclaimer.css';
const Disclaimer = () => {
    return (
        <div>
            <p className='text-xl px-3 md:px-0'><strong>Disclaimer:</strong> Neither Vader-San nor this website’s administrator are responsible for the content of community project sites. We cannot be held accountable for anything that happens outside official communities or for limitations imposed by external terms of service, privacy policies, and the like.</p>
            <div className="disclaimer">
                <img src={hunkSynth} alt="" className='rounded-xl my-10 shadow-inner w-full' />
            </div>
            <p className='text-xl px-3 md:px-0'>The development of the Synth species, this website and <a href='#' className='text-[#005cb2] text-xl'>the wiki</a> is made possible by your generous support on Patreon. If you like what you see, consider supporting <a href='#' className='text-[#005cb2] text-xl'>Vader-San on Patreon.</a></p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-8">
                <Link to="#" className='bg-[#fed44f] py-3 px-6 text-xl rounded-lg hover:bg-[#fed54fb9] shadow-sm w-[210px] text-center'>Become a Patron</Link>
            </div>
        </div>
    );
};

export default Disclaimer;