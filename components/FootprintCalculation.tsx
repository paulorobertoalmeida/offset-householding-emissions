import React, { useState } from 'react';
import RetiringOffset from './RetiringOffset';

const FootprintCalculator: React.FC<FootprintCalculatorProps> = ({ selectedData, onGoBack }) => {
  const [electricity, setElectricity] = useState('');
  const [naturalGas, setNaturalGas] = useState('');
  const [showRetiringOffset, setShowRetiringOffset] = useState(false);

  const calculateCarbonFootprint = () => {
    const co2EmissionFactor = 0.527; // CO2 emission factor (kg CO2 per kWh) - adjust based on your region or data source
    const electricityFootprint = parseFloat(electricity) * co2EmissionFactor;
    const naturalGasFootprint = parseFloat(naturalGas) * co2EmissionFactor;
    const totalFootprint = electricityFootprint + naturalGasFootprint;

    return totalFootprint.toFixed(2);
  };

  const handleRetireOffset = () => {
    setShowRetiringOffset(true);
  };

  const handleBackToCalculator = () => {
    setShowRetiringOffset(false);
  };

  return (
    <div>
      {!showRetiringOffset ? (
        <div>
          <div >
            <h2 className="mb-4 text-2xl font-bold">Footprint Calculator</h2>
            <div className="mb-4">
              <label htmlFor="electricity" className="block text-sm font-medium text-gray-700">
                Electricity consumption (kWh)
              </label>
              <input
                type="number"
                id="electricity"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Ex: 460kWh"
                value={electricity}
                onChange={(e) => setElectricity(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="natural-gas" className="block text-sm font-medium text-gray-700">
                Natural gas consumption (kWh)
              </label>
              <input
                type="number"
                id="natural-gas"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='Ex: 11,70kWh'
                value={naturalGas}
                onChange={(e) => setNaturalGas(e.target.value)}
              />
            </div>
            {electricity && naturalGas && (
              <div className="mb-4 text-center">
                <label className="block text-sm italic font-medium text-gray-700">Total Carbon Footprint (kg CO2)</label>
                <p className="text-3xl font-bold">{calculateCarbonFootprint()}</p>
              </div>
            )}
            <div>
            <button
                className="px-4 py-2 mr-2 font-medium text-black bg-white border border-black rounded-md hover:bg-blue-100"
                onClick={onGoBack}
              >
                Go Back
              </button>
              <button
                className="px-4 py-2 mr-2 font-medium text-white bg-green-900 rounded-md hover:bg-green-600"
                onClick={handleRetireOffset}
              >
                Retire / Offset
              </button>
            </div>
          </div>
        </div>
      ) : (
        <RetiringOffset
          carbonFootprint={parseFloat(calculateCarbonFootprint())}
          onGoBack={handleBackToCalculator}
        />
      )}
    </div>
  );
};

export default FootprintCalculator;







