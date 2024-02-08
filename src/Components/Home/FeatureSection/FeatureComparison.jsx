import React from 'react';
import FeatureIntro from './FeatureIntro';
import FeatureMessage from './FeatureMessage';
import FeatureTable from './FeatureTable';

const FeatureComparison = () => {
    return (
        <div className='max-w-5xl mx-auto' id='Features'>
            <FeatureIntro />
            <FeatureTable />
            <FeatureMessage />
        </div>
    );
};

export default FeatureComparison;