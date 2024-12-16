import React from 'react';
import { FunctionCardProps } from '../types';

export const FunctionCard: React.FC<FunctionCardProps> = ({ 
  node, 
  position, 
  onChange,
  value,
  result
}) => {
  return (
    <div 
      className="absolute bg-white rounded-lg shadow-md p-6 w-[280px]"
      style={{ 
        left: position.x,
        top: position.y
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="text-gray-500">⋮⋮</div>
        <h3 className="text-gray-700">Function: {node.id}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Equation</label>
          <input
            type="text"
            value={node.equation}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
            placeholder="Enter equation (e.g., x^2)"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Next function</label>
          <select 
            disabled
            className="w-full p-2 border rounded-md bg-gray-50 text-gray-500"
            value={node.nextFunction || ''}
          >
            <option value={node.nextFunction || ''}>
              {node.nextFunction ? `Function: ${node.nextFunction}` : '-'}
            </option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span className="text-sm text-gray-500">Input: {value.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Output: {result.toFixed(2)}</span>
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};