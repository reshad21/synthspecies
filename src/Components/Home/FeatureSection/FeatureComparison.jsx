import React from 'react';
import { useSmoothNavber } from '../../../Context/NavberProvider';
import FeatureIntro from './FeatureIntro';
import FeatureMessage from './FeatureMessage';
import FeatureTable from './FeatureTable';

const FeatureComparison = () => {
    const { Features } = useSmoothNavber()
    return (
        <div className='max-w-5xl mx-auto' id='Features' ref={Features}>
            <FeatureIntro />
            <FeatureTable />
            <FeatureMessage />
        </div>
    );
};

export default FeatureComparison;