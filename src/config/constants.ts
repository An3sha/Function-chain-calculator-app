import { FunctionNode, Position } from '../types';

export const initialFunctions: FunctionNode[] = [
  { id: 1, equation: 'x^2', nextFunction: 2 },
  { id: 2, equation: '2*x+4', nextFunction: 4 },
  { id: 3, equation: 'x^2+20', nextFunction: null },
  { id: 4, equation: 'x-2', nextFunction: 5 },
  { id: 5, equation: 'x/2', nextFunction: 3 },
];

export const positions: Record<number, Position> = {

  1: { x: 100, y: 80 }, 
  2: { x: 460, y: 80 },  
  3: { x: 820, y: 80 },  
  4: { x: 280, y: 380 }, 
  5: { x: 640, y: 380 }, 
};

export const connectionOrder = [1, 2, 4, 5, 3];