import React, { forwardRef } from 'react';
import { useSmoothNavber } from '../../../Context/NavberProvider';
import ResourceCommunity from './ResourceCommunity';
import ResourcesTypes from './ResourcesTypes';

const Resources = () => {
    const { ref } = useSmoothNavber()
    return (
        <div className='mx-auto max-w-5xl' id='Resources' ref={ref}>
            <ResourcesTypes />
            <ResourceCommunity />
        </div>
    );
};

export default forwardRef(Resources);