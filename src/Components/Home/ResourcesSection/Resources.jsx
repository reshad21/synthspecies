import React from 'react';
import { useSmoothNavber } from '../../../Context/NavberProvider';
import ResourceCommunity from './ResourceCommunity';
import ResourcesTypes from './ResourcesTypes';

const Resources = () => {
    const { Resources } = useSmoothNavber()
    return (
        <div className='mx-auto max-w-5xl' id='Resources' ref={Resources}>
            <ResourcesTypes />
            <ResourceCommunity />
        </div>
    );
};

export default Resources;