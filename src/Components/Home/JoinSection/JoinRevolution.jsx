import React from 'react';
import { useSmoothNavber } from '../../../Context/NavberProvider';
import CommunityProject from './CommunityProject';
import Disclaimer from './Disclaimer';
import JoinButton from './JoinButton';

const JoinRevolution = () => {
    const { Revolution } = useSmoothNavber()
    return (
        <div className='mx-auto max-w-5xl' id='JointheRevolution' ref={Revolution}>
            <JoinButton />
            <CommunityProject />
            <Disclaimer />
        </div>
    );
};

export default JoinRevolution;