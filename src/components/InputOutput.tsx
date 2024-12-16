import React from 'react';
import { Position } from '../types';

interface InputOutputProps {
  value: number;
  onChange: (value: number) => void;
  result: number;
  startPosition: Position;
  endPosition: Position;
}

export const InputOutput: React.FC<InputOutputProps> = ({ 
  value, 
  onChange, 
  result,
  startPosition,
  endPosition 
}) => {
  return (
    <>
      <div 
        className="absolute"
        style={{
          left: startPosition.x,
          top: startPosition.y
        }}
      >
        <div className="bg-orange-100 rounded-lg px-4 py-2 text-sm text-orange-600 mb-2 whitespace-nowrap">
          Initial value of x
        </div>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-24 p-2 border rounded-lg text-center"
        />
      </div>

      <div 
        className="absolute"
        style={{
          left: endPosition.x,
          top: endPosition.y
        }}
      >
        <div className="bg-green-100 rounded-lg px-4 py-2 text-sm text-green-600 mb-2 whitespace-nowrap">
          Final Output y
        </div>
        <div className="w-24 p-2 border rounded-lg text-center bg-white">
          {result.toFixed(2)}
        </div>
      </div>
    </>
  );
};