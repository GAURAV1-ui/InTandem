import React, { useState } from 'react';

const RemarkForm = ({ handleRemark }) => {
    const [remark, setRemark] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRemark(remark);
        setRemark("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-2">
                <input
                    type="text"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    placeholder="Enter remark"
                    className="border rounded p-1 w-full"
                />
                <button type="submit" className="mt-1 bg-blue-500 text-white rounded px-2 py-1">
                    Save Remark
                </button>
            </form>
        </div>
    );
};

export default RemarkForm;
