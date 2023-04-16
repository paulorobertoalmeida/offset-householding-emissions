import React from 'react';
import FootprintCalculation from '@/components/FootprintCalculation';

// import { Container } from './styles';

const FootprintCalculator: React.FC = () => {
  return <div  className="flex flex-col justify-center items-center h-[80vh]">
    <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] bg-white undefined">
      <FootprintCalculation />
      </div>
    
  </div>;
}

export default FootprintCalculator;