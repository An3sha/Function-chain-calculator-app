export interface FunctionNode {
  id: number;
  equation: string;
  nextFunction: number | null;
}

export interface Position {
  x: number;
  y: number;
}

export interface FunctionCardProps {
  node: FunctionNode;
  position: Position;
  onChange: (equation: string) => void;
  value: number;
  result: number;
}