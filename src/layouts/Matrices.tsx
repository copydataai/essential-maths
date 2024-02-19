import { createMemo, createSignal, Show } from "solid-js";
import { Matrix } from "../components/Matrix";
import { SetMatrix } from "../components/SetMatrix";
import { StepOptions } from "../components/StepOptions";
import {
  adjugate,
  determinant,
  inverse,
  cofactor,
  minors,
} from "../utils/Matrices";

export enum Operations {
  adjugate = "Adjugate",
  determinant = "Determinant",
  inverse = "Inverse",
  minors = "Minors",
  cofactor = "Cofactors",
}

export function MatricesLayout() {
  const [matrix, setMatrix] = createSignal<Array<Array<number>>>(
    Array.from(Array(2), () => Array(2).fill(0)),
    { equals: false }
  );
  const [operation, setOperation] = createSignal<Operations>(
    Operations.determinant
  );
  const [error, setError] = createSignal<string | undefined>(undefined);

  const resultMemo = createMemo(
    () => {
      try {
        setError("");
        const operationValue = operation();
        const matrixValue = matrix();
        if (operationValue === Operations.determinant) {
          return determinant(matrixValue);
        } else if (operationValue === Operations.cofactor) {
          return cofactor(matrixValue);
        } else if (operationValue === Operations.adjugate) {
          return adjugate(matrixValue);
        } else if (operationValue === Operations.minors) {
          return minors(matrixValue);
        } else if (operationValue === Operations.inverse) {
          return inverse(matrixValue);
        }
      } catch (e: any) {
        setError(e.toString());
      }

      return undefined;
    },
    { equals: false }
  );

  createMemo(() => {
    console.log(matrix(), operation());
    console.log(resultMemo());
  });

  return (
    <main class="flex flex-col items-center justify-center space-y-4">
      <div>
        <StepOptions operation={operation} setOperation={setOperation} />
      </div>
      <SetMatrix matrix={matrix} setMatrix={setMatrix} />
      <Show
        when={resultMemo() !== undefined}
        fallback={<span class="loading loading-spinner"></span>}
      >
        <Show
          when={operation() === Operations.determinant}
          fallback={<Matrix matrix={resultMemo} />}
        >
          <span>Determinant:</span>
          <span>{resultMemo()}</span>
        </Show>
      </Show>
      <Show when={error() !== ""}>
        <div class="toast">
          <div role="alert" class="alert alert-error">
            <img
              class="h-6 w-6 shrink-0 stroke-current"
              src="/error.svg"
              alt=""
            />
            <span>{error()}</span>
          </div>
        </div>
      </Show>
    </main>
  );
}
