import React from 'react';

const CommunityProject = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold py-4 px-3 md:px-0'>Community Projects</h2>
            <p className='text-xl px-3 md:px-0'>In addition to the official links above, you may also check out these fan-operated communities and resources:</p>
            <ul className='py-8 flex flex-col gap-3 pl-20'>
                <li><span className='text-xl font-bold'>Fur Affinity:</span><a href='#' className='text-[#005cb2] text-xl'>Synth Revo Gallery by EnDecc</a></li>
                <li><span className='text-xl font-bold'>VRChat:</span><a href='#' className='text-[#005cb2] text-xl'>Synth Avatar by Intet • Synth Avatar by Lux Aeterna</a></li>
                <li><span className='text-xl font-bold'>Second Life:</span> <a href='#' className='text-[#005cb2] text-xl'>Synth Avatar Revolution by B.Tech</a></li>
            </ul>
        </div>
    );
};

export default CommunityProject;