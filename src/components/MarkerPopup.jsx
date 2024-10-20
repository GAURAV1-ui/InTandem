import React from 'react';
import RemarkForm from './RemarkForm';

const MarkerPopup = ({ markerData, handleRemark }) => {
    return (
        <div>
            <p>{markerData.address || "Drag me to get address!"}</p>
            <RemarkForm handleRemark={handleRemark} />
            {markerData.remark && (
                <div>
                    <p><strong>Remark:</strong> {markerData.remark}</p>
                    <p><strong>Date:</strong> {markerData.date}</p>
                </div>
            )}
        </div>
    );
};

export default MarkerPopup;
