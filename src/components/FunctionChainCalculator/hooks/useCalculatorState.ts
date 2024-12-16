import { useState, useEffect } from 'react';
import { FunctionNode } from '../../../types';
import { initialFunctions, connectionOrder } from '../../../config/constants';
import { calculateResult, validateEquation } from '../../../utils/calculator';

export const useCalculatorState = () => {
  const [functions, setFunctions] = useState<FunctionNode[]>(initialFunctions);
  const [initialValue, setInitialValue] = useState<number>(2);
  const [results, setResults] = useState<Record<number, number>>({});

  const updateEquation = (id: number, equation: string) => {
    if (!validateEquation(equation)) return;
    setFunctions(prev => 
      prev.map(f => f.id === id ? { ...f, equation } : f)
    );
  };

  useEffect(() => {
    let currentValue = initialValue;
    const newResults: Record<number, number> = {};

    connectionOrder.forEach(id => {
      const func = functions.find(f => f.id === id);
      if (func) {
        currentValue = calculateResult(func.equation, currentValue);
        newResults[id] = currentValue;
      }
    });

    setResults(newResults);
  }, [initialValue, functions]);

  return {
    functions,
    initialValue,
    results,
    updateEquation,
    setInitialValue
  };
};