import React from 'react';
import { useRouter } from 'next/router';
import FootprintCalculator from '@/pages/footprint-calculator';

const ReviewData = ({ selectedData, onGoBack }) => {
    const router = useRouter();

    const handleConfirmData = () => {
        router.push('/footprint-calculator');
    };
    return (
        <div>
            <hr />
            <h2 className='my-2 text-xl font-semibold'>Review your data</h2>
            <ul>
                <li>Cadastral Number: {selectedData.num_cas}</li>
                <li>Address: {selectedData.adre_a}</li>
                <li>Postal Code: {selectedData.codi_postal}</li>
                <li>City: {selectedData.poblacio}</li>
                <li>State: {selectedData.comarca}</li>
                <li>State Code: {selectedData.codi_poblacio}</li>
            </ul>
            <div className="flex justify-end justify-between pt-3">
                <button
                    onClick={onGoBack}
                    className="px-4 py-2 font-medium text-black text-gray-700 bg-white border border-black rounded-md hover:bg-gray-400"
                >
                    Go Back
                </button>
                <button
                    onClick={handleConfirmData}
                    className="px-4 py-2 mr-2 font-medium text-white bg-green-900 rounded-md hover:bg-green-700"
                >
                    Confirm Data
                </button>
            </div>
        </div>
    );
};

export default ReviewData;
