
export function transpose(matrix: number[][]) :number[][] {
    let result = Array.from(Array(matrix[0].length), () => Array(matrix.length).fill(0));
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            result[column][row] = matrix[row][column];
        }
    }

    return result;
}

export function determinant(matrix: number[][]): number {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Base case: If the matrix is 2x2, return the determinant
  if (numRows === 2 && numCols === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  let result = 0;

  // Iterate over the elements of the first row
  for (let j = 0; j < numCols; j++) {
    // Calculate the sign factor
    const signFactor = Math.pow(-1, 1 + j);

    // Calculate the submatrix by excluding the first row and j-th column
    const submatrix = matrix
      .slice(1) // Exclude the first row
      .map((row) => row.slice(0, j).concat(row.slice(j + 1))); // Exclude the j-th column

    // Recursive call to find the determinant of the submatrix
    const submatrixDeterminant = determinant(submatrix);

    // Accumulate the result using the Laplace Expansion formula
    result += signFactor * matrix[0][j] * submatrixDeterminant;
  }

  return result;
}

export function minors(matrix: number[][]): number[][] {
    const size = matrix.length;
    const minors = [];

    if (size === 2) {
        return [[matrix[1][1], matrix[1][0]], [matrix[0][1], matrix[0][0]]];
    }

    for (let i = 0; i < size; i++) {
        const minorRow = [];
        for (let j = 0; j < size; j++) {
            const submatrix = matrix
                .slice(0, i)
                .concat(matrix.slice(i + 1))
                .map((row) => row.slice(0, j).concat(row.slice(j + 1)));
            
            minorRow.push(determinant(submatrix));
        }
        minors.push(minorRow); 
    }

    return minors;
}

export function cofactor(matrix: number[][]): number[][] {
    const size = matrix.length;
    const cofactors = [];

    if (size === 2) {
        return [[matrix[1][1], matrix[1][0]], [matrix[0][1], matrix[0][0]]];
    }


    for (let i = 0; i < size; i++) {
        const cofactorRow = [];
        for (let j = 0; j < size; j++) {
            const submatrix = matrix
                .slice(0, i)
                .concat(matrix.slice(i + 1))
                .map((row) => row.slice(0, j).concat(row.slice(j + 1)));
            
            cofactorRow.push(Math.pow(-1, i + j) * determinant(submatrix));
        }
        cofactors.push(cofactorRow); 
    }


    return cofactors;
}

export function adjugate(matrix: number[][]): number[][] {
    // use the previous functions to get the cofactors and transpose
    let cofactors = cofactor(matrix);
    const result = transpose(cofactors);

    return result;
}

export function inverse(matrix: number[][]): number[][] {
    /// use the previous functions to get the inverse matrix
    let cofactors = cofactor(matrix);
    let det = determinant(matrix);
    if (det === 0) {
        throw new Error("Matrix is not invertible");
    }
    const result = transpose(cofactors);
    return result.map((row) => row.map((element) => element / det));
}


export function multiplication(matrix: number[][], otherMatrix: number[][]) {
    let result = Array.from(Array(matrix.length), () => Array(matrix.length).fill(0));
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            for (let i = 0; i < matrix.length; i++) {
                result[row][column] += matrix[row][i] * otherMatrix[i][column];
            }
        }
    }
    return result;
}


export function addition(matrix: number[][], otherMatrix: number[][]) {
    if (matrix.length !== otherMatrix.length) {
        throw new Error("Matrices must be the same size");
    }
    let result = Array.from(Array(matrix.length), () => Array(matrix.length).fill(0));
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            result[row][column] = matrix[row][column] + otherMatrix[row][column];
        }
    }

    return result;
}


export function subtraction(matrix: number[][], otherMatrix: number[][]) {
    if (matrix.length !== otherMatrix.length) {
        throw new Error("Matrices must be the same size");
    }

    let result = Array.from(Array(matrix.length), () => Array(matrix.length).fill(0));
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            result[row][column] = matrix[row][column] - otherMatrix[row][column];
        }
    }

    return result;
}
