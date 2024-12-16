import { Position } from '../../types';

export const getConnectionPoints = (
  fromId: number,
  toId: number,
  positions: Record<number, Position>
) => {
  const start = {
    x: positions[fromId].x + 280,  
    y: positions[fromId].y + 100,  
  };
  const end = {
    x: positions[toId].x,          
    y: positions[toId].y + 100,    
  };

  return { start, end };
};