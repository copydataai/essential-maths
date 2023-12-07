// TypeScript
type MathFunction = (x: number) => number;

export function createFunctionFromString(formula: string): MathFunction {
  // Ensure the input formula is safe before using it
  const sanitizedFormula = sanitizeFormula(formula);
  const transformedFormula = transformFormula(sanitizedFormula);

  // Use the Function constructor to create a function from the formula
  const mathFunction = new Function(
    "x",
    `return ${transformedFormula}`
  ) as MathFunction;

  return mathFunction;
}

function sanitizeFormula(formula: string): string {
  // Basic sanitation for demonstration purposes
  // You may need to implement more robust sanitation based on your use case
  return formula.replace(/[^0-9x+\-*^/() ]/g, "");
}

function transformFormula(formula: string): string {
  formula = formula.replace(/x\^(\d+)/g, "Math.pow(x, $1)");
  // Replace x with x* (e.g., x2 should become x*2)
  formula = formula.replace(/(\d+)x/g, "$1*x");

  // Replace x with n*x (e.g., 2x should become 2*x)
  formula = formula.replace(/x(\d+)/g, "$1*x");

  formula = formula.replace(/x/g, "(x*1)");
  return formula;
}
