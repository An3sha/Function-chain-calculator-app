export const validateEquation = (equation: string): boolean => {
  const validPattern = /^[x0-9+\-*/^()\s.]+$/;
  return validPattern.test(equation);
};

export const calculateResult = (equation: string, x: number): number => {
  try {
    // Replace ^ with ** for exponentiation
    const processedEquation = equation.replace(/\^/g, '**').replace(/x/g, x.toString());
    return Function(`return ${processedEquation}`)();
  } catch (error) {
    console.error('Calculation error:', error);
    return 0;
  }
};