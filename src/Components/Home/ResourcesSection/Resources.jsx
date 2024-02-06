import React from 'react';
import ResourceCommunity from './ResourceCommunity';
import ResourcesTypes from './ResourcesTypes';

const Resources = () => {
    return (
        <div className='mx-auto max-w-5xl'>
            <ResourcesTypes />
            <ResourceCommunity />
        </div>
    );
};

export default Resources;