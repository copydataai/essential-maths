import { test, expect} from 'vitest';
import { createFunctionFromString, sanitizeFormula, transformFormula } from '../../src/utils/MathFunction';


test("Verify function result", () => {
    const formulaString = 'x^2 + 2x + 4x';

    const quadraticFunction = createFunctionFromString(formulaString);

    const result = quadraticFunction(3);
    expect(result).toEqual(27);

    const formula2 = 'x^2 + x2 + x4'
    console.log(formula2)

    const quaFunction = createFunctionFromString(formula2);

    // Evaluate the function for x = 3
    const result2 = quaFunction(3);
    console.log(result2);
    expect(result2).toEqual(27);

    const form3 = "x+2"
    const simplePlus = createFunctionFromString(form3)
    expect(simplePlus(4)).toEqual(6)

})
