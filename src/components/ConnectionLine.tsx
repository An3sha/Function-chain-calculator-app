import React from 'react';
import { Position } from '../types';

interface ConnectionLineProps {
  start: Position;
  end: Position;
  curved?: boolean;
}

export const ConnectionLine: React.FC<ConnectionLineProps> = ({ start, end, curved = false }) => {
  if (curved) {
    const controlPointY = Math.abs(end.y - start.y) > 100 
      ? (start.y + end.y) / 2 
      : Math.max(start.y, end.y) + 100;
    
    const path = `M ${start.x} ${start.y} 
                 C ${start.x + 50} ${start.y},
                   ${end.x - 50} ${controlPointY},
                   ${end.x} ${end.y}`;
    
    return (
      <svg 
        className="absolute top-0 left-0 w-full h-full" 
        style={{ 
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'visible'
        }}
      >
        <path
          d={path}
          stroke="#93C5FD"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg 
      className="absolute top-0 left-0 w-full h-full" 
      style={{ 
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'visible'
      }}
    >
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke="#93C5FD"
        strokeWidth="2"
      />
    </svg>
  );
};