import React from 'react';
import affinity from '../../../assets/affinity.png';
import featureFirst from '../../../assets/featurslogo.png';
const ResourcesTypes = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold py-7 text-[#9e4c00] px-3 md:px-0'>Resources</h2>
            <div className="flex flex-col gap-10 pb-10">
                <div className="flex flex-col md:flex-row justify-between px-3 md:px-0 items-start gap-5">
                    <img src={featureFirst} alt="" className='w-[145px] h-[135px]' />
                    <div className="">
                        <h2 className='text-2xl font-bold py-4 pt-0 text-[#005cb2]'>The Synth Species Wiki</h2>
                        <p className='text-xl'>The official source of Synth canon, written, maintained and illustrated by <a href='#' className='text-[#005cb2]'>Vader-San</a> himself. Here you can read about <a href='#' className='text-[#005cb2]'>Synth culture</a>, learn the intricacies of <a href='#' className='text-[#005cb2]'>Synth anatomy</a>, research <a href='#' className='text-[#005cb2]'>Synth history</a>, and more. <br /><br />

                            There is also a handy <a href='#' className='text-[#005cb2]'>fact sheet</a> and <a href='#' className='text-[#005cb2]'>bases</a> for Synth characters.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between px-3 md:px-0 items-start gap-5">
                    <img src={affinity} alt="" className='w-[145px] h-[135px]' />
                    <div className="">
                        <h2 className='text-2xl font-bold py-4 pt-0'><a href='#' className='text-[#005cb2]'>Synth Revo Gallery</a> on Fur Affinity</h2>
                        <p className='text-xl'>A curated gallery of artwork featuring Synths, managed by community member and self-styled Synth shill <a href='#' className='text-[#005cb2]'>EnDecc</a>. You will find the gallery’s contents in the favourites. Adult artwork is present and requires an account to view.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesTypes;