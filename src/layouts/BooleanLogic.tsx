import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { Table } from "../components/Table";

export const BooleanLogicLayout: Component = () => {
  const [operators, setOperators] = createSignal<string[]>([]);
  const [vars, setVars] = createSignal<Array<string>>(["A", "B"]);

  const extractEquation = event => {
    const value = event.target.value;
    const operations = value.match(/[!]?[a-zA-Z(]+[+.⊕⊼⊽∧&∨|]?[a-zA-Z)]+/g);
    const vars = value.match(/[a-zA-Z]/g);
    if (operations !== null) {
      setOperators(operations);
    }
    const uniqueVars: Array<string> = Array.from(new Set(vars));
    setVars(uniqueVars);
  };

  return (
    <main class="flex flex-col items-center">
      <div class="flex">
        <label class="">Logic Operation</label>
        <input
          class="input input-bordered input-primary w-full max-w-xs"
          type="text"
          name="equation"
          onInput={extractEquation}
        />
      </div>
      <div>
        <Table operators={operators} variables={vars} />
      </div>
    </main>
  );
};
