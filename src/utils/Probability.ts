export function Factorial(num: number): number {
  if (num <= 1) {
    return 1;
  }
  return num * Factorial(num - 1);
}

export function Permutations(num: number, choices: number): number {
  if (num <= 0) {
    return 0;
  }

  return Factorial(num + choices - 1) / Factorial(choices);
}

export function Combinations(num: number, choices: number): number {
  if (num <= 0) {
    return 0;
  }

  return Factorial(num) / (Factorial(choices) * Factorial(num - choices));
}
