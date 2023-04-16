import React, { useState } from 'react';

interface RetiringOffsetProps {
  carbonFootprint: number;
  onGoBack: () => void;
}

const RetiringOffset: React.FC<RetiringOffsetProps> = ({ carbonFootprint, onGoBack }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const offsetCostPerKwh = 2.02;
  const totalCost = carbonFootprint * offsetCostPerKwh;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-center">Retire / Offset Carbon Footprint</h2>
      <p>Your carbon footprint: {carbonFootprint} kg CO2</p>
      <p>Cost per kWh: ${offsetCostPerKwh.toFixed(2)}</p>
      <p className="mb-2 font-bold">Total cost: ${totalCost.toFixed(2)}</p>

      {!showSuccessModal ? (
        <form onSubmit={handleSubmit}>
          {/* Your payment form fields go here */}
          <div className="flex justify-between">
            <button className="px-4 py-2 mr-2 font-medium text-black bg-white border border-black rounded-md hover:bg-blue-100" onClick={onGoBack}>Go Back</button>
          <button className="px-6 py-2 mr-2 font-medium text-white bg-green-900 rounded-md hover:bg-green-600" type="submit">Pay</button>
          </div>
          
        </form>
      ) : (
        <div>
          <h3 className='font-bold text-green-900'>Success!</h3>
          <p className='mb-2'>Your payment has been processed.</p>
          <button className="px-4 py-2 mr-2 font-medium text-black bg-white border border-black rounded-md hover:bg-blue-100" onClick={onGoBack}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default RetiringOffset;
