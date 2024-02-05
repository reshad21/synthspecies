import React from 'react';
// import './Footer.css';
import footerImage from '../../../assets/footer_image.png';
const Footer = () => {
    return (
        <div className='bg-[#29434e] py-7'>
            <div className="max-w-5xl mx-auto px-3">
                <p className='text-xl text-white mb-9'>The Synth species was created by <span><a href="#" className='text-[#85c9ff]'>Vader-San</a></span>. The Synth species is open and free to use for any purpose. All artwork on this website is copyright © <span><a href="#" className='text-[#85c9ff]'>Vader-San</a></span>.</p>
                <p className='text-xl text-white'>This website was created by <span><a href="#" className='text-[#85c9ff]'>Arimah</a></span>, who just thinks Synths are neat.</p>

                <div className="relative pt-9">
                    <img src={footerImage} alt="" className='absolute bottom-[-28px] right-0' />
                </div>
            </div>
            {/* <div className="wrap">
                <div className="eye double-blink"></div>
                <div className="eye double-blink"></div>
            </div> */}

        </div>
    );
};

export default Footer;