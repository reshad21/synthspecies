import React from 'react';
import CommunityProject from './CommunityProject';
import Disclaimer from './Disclaimer';
import JoinButton from './JoinButton';

const JoinRevolution = () => {
    return (
        <div className='mx-auto max-w-5xl' id='JointheRevolution'>
            <JoinButton />
            <CommunityProject />
            <Disclaimer />
        </div>
    );
};

export default JoinRevolution;