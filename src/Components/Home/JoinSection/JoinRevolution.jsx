import React, { forwardRef } from 'react';
import { useSmoothNavber } from '../../../Context/NavberProvider';
import CommunityProject from './CommunityProject';
import Disclaimer from './Disclaimer';
import JoinButton from './JoinButton';

const JoinRevolution = () => {
    const { ref } = useSmoothNavber()
    return (
        <div className='mx-auto max-w-5xl' id='JointheRevolution' ref={ref}>
            <JoinButton />
            <CommunityProject />
            <Disclaimer />
        </div>
    );
};

export default forwardRef(JoinRevolution);