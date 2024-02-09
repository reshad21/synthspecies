import React from 'react';
import FeatureComparison from '../../Components/Home/FeatureSection/FeatureComparison';
import Hero from '../../Components/Home/Hero';
import IntroButton from '../../Components/Home/Introbutton';
import Introduction from '../../Components/Home/Introduction';
import JoinRevolution from '../../Components/Home/JoinSection/JoinRevolution';
import Resources from '../../Components/Home/ResourcesSection/Resources';
import WhyGoSynth from './../../Components/Home/GoSynthSection/WhyGoSynth';
import Navber from './../../Components/Shared/Navber/Navber';
const Home = () => {
    return (
        <>
            <Hero />
            <Navber />
            <Introduction />
            <IntroButton />
            <WhyGoSynth />
            <FeatureComparison />
            <Resources />
            <JoinRevolution />
        </>
    );
};

export default Home;