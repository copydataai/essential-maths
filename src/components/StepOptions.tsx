import {
  type Component,
  type Setter,
  type Accessor,
  createMemo,
} from "solid-js";
import { Operations } from "../layouts/Matrices";

type StepOptionsProps = {
  operation: Accessor<Operations>;
  setOperation: Setter<Operations>;
};

export const StepOptions: Component<StepOptionsProps> = props => {
  const { operation, setOperation } = props;

  return (
    <div class="">
      <ul class="steps">
        <button
          data-content="|A|"
          class="step"
          classList={{ "step-primary": operation() === Operations.determinant }}
          onClick={() => setOperation(Operations.determinant)}
        >
          Determinant
        </button>
        <button
          data-content="M"
          class="step"
          classList={{ "step-primary": operation() === Operations.minors }}
          onClick={() => setOperation(Operations.minors)}
        >
          Minors
        </button>
        <button
          data-content="Co"
          class="step"
          classList={{ "step-primary": operation() === Operations.cofactor }}
          onClick={() => setOperation(Operations.cofactor)}
        >
          Cofactors
        </button>
        <button
          data-content="Adj"
          class="step"
          classList={{ "step-primary": operation() === Operations.adjugate }}
          onClick={() => setOperation(Operations.adjugate)}
        >
          Adjugate
        </button>
        <button
          data-content="1/A"
          class="step"
          classList={{ "step-primary": operation() === Operations.inverse }}
          onClick={() => setOperation(Operations.inverse)}
        >
          Inverse
        </button>
      </ul>
    </div>
  );
};
