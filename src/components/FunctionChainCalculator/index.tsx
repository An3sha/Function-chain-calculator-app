import React from 'react';
import { FunctionCard } from '../FunctionCard';
import { InputOutput } from '../InputOutput';
import { positions, connectionOrder } from '../../config/constants';
import { useCalculatorState } from './hooks/useCalculatorState';

export const FunctionChainCalculator: React.FC = () => {
  const {
    functions,
    initialValue,
    results,
    updateEquation,
    setInitialValue
  } = useCalculatorState();

  return (
    <div className="relative w-[1200px] h-[800px] bg-white rounded-xl p-8">
     
      {functions.map(func => (
        <FunctionCard
          key={func.id}
          node={func}
          position={positions[func.id]}
          onChange={(equation) => updateEquation(func.id, equation)}
          value={func.id === 1 ? initialValue : (results[
            connectionOrder[connectionOrder.indexOf(func.id) - 1]
          ] || 0)}
          result={results[func.id] || 0}
        />
      ))}

  
      <InputOutput
        value={initialValue}
        onChange={setInitialValue}
        result={results[3] || 0}
        startPosition={{ x: positions[1].x - 160, y: positions[1].y + 100 }} 
        endPosition={{ x: positions[3].x + 300, y: positions[3].y + 100 }}
      />
    </div>
  );
};