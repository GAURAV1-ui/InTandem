import React from 'react';
import RemarkForm from './RemarkForm';

const MarkerPopup = ({ markerData, handleRemark }) => {
    return (
        <div>
            <p>{markerData.address || "Drag me to get address!"}</p>
            <RemarkForm handleRemark={handleRemark} />
        </div>
    );
};

export default MarkerPopup;
