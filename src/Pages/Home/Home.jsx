import React from 'react';
import Hero from '../../Components/Home/Hero';
import IntroButton from '../../Components/Home/Introbutton';
import Introduction from '../../Components/Home/Introduction';
import Navber from './../../Components/Shared/Navber/Navber';
const Home = () => {
    return (
        <div>
            <>
                <Hero />
                <Navber />
                <Introduction />
                <IntroButton />
            </>
        </div>
    );
};

export default Home;