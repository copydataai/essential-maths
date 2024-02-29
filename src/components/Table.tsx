import type { Component, Accessor } from "solid-js";
import { For, createMemo, createEffect } from "solid-js";

type TableProps = {
  operators: Accessor<Array<string>>;
  variables: Accessor<Array<string>>;
};

// TODO: implement a method that recognices the operators and diagnoses the values

/* enum Operators {
 *   And = "AND" | "." | "∧" | "&",
 *   Or = "OR" | "+" | "∨" | "|",
 *   Not = "NOT" | "!" | "~",
 *   Xor = "XOR" | "⊕",
 *   Nand = "NAND" | "⊼",
 *   Nor = "NOR" | "⊽",
 * }
 *  */
/* type Operators = {
 *   And: new RegExp("[*.∧&]");
 * }
 *  */

function Operation(operation: string, operators: boolean[]): boolean {
  const and = new RegExp("[*.∧&]");
  const or = new RegExp("[+∨|]");
  const not = new RegExp("[!~]");
  const xor = new RegExp("[⊕]");
  const nand = new RegExp("[⊼]");
  const nor = new RegExp("[⊽]");

  // TODO: make to work operators with n variables
  // e.g.: C.D A.B
  if (and.test(operation)) {
    return operators[0] && operators[1];
  } else if (or.test(operation)) {
    return operators[0] || operators[1];
  } else if (xor.test(operation)) {
    // !== xor ^
    return operators[0] !== operators[1];
  }

  return false;
}

export const Table: Component<TableProps> = props => {
  const { operators, variables } = props;

  const values = createMemo<Array<Array<boolean>>>(() => {
    const operations = operators();
    const varLength = variables().length;
    let totalNumber = Math.pow(2, varLength);
    console.log("per", totalNumber, varLength, operations.length);
    const result = new Array(totalNumber)
      .fill(null)
      .map(() => new Array(operations.length + varLength).fill(false));

    for (let row = 0; row < totalNumber; row++) {
      for (let col = 0; col < varLength + operations.length; col++) {
        // fill the first columns with the variable values
        if (col < varLength) {
          // Determine the value for each column in the current row
          // If the bit at position col in row is 1, the value is true; otherwise, it's false
          const value = (row & (1 << (varLength - col - 1))) !== 0;
          result[row][col] = value;
          continue;
        }
        const vars = new Array<boolean>(varLength);
        for (let i = 0; i < varLength; i++) {
          vars[i] = result[row][i];
        }
        const value = Operation(operations[col - varLength], vars);
        result[row][col] = value;
      }
    }

    return result;
  });

  console.log(operators(), variables());
  return (
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <For each={variables()}>{value => <th>{value}</th>}</For>
            <For each={operators()}>{operator => <th>{operator}</th>}</For>
          </tr>
        </thead>
        <tbody>
          <For each={values()}>
            {fields => (
              <tr>
                <For each={fields}>{value => <td>{value ? "1" : "0"}</td>}</For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};
