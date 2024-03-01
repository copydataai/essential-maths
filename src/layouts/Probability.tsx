import { createSignal } from "solid-js";
import { Factorial, Combinations, Permutations } from "../utils/Probability";

export function ProbabilityLayout() {
  const [factorial, setFactorial] = createSignal<number>(5);
  const [options, setOptions] = createSignal<number>(6);
  const [combinations, setCombinations] = createSignal<number>(2);
  const [permutations, setPermutations] = createSignal<number>(2);

  return (
    <main class="flex flex-col items-center">
      <div role="tablist" class="tabs tabs-bordered">
        <input
          type="radio"
          name="option"
          role="tab"
          class="tab ml-20"
          aria-label="Factorial"
        />
        <div role="tabpanel" class="tab-content p-10">
          <div class="flex flex-col items-center">
            <input
              class="input input-bordered input-xs"
              type="number"
              name="factorial"
              onChange={event => {
                const value = event?.target.value;
                setFactorial(parseInt(value));
              }}
              value={factorial()}
            />
            <p>{Factorial(factorial())}</p>
          </div>
        </div>
        <input
          type="radio"
          name="option"
          role="tab"
          class="tab ml-20"
          aria-label="Permutations"
        />
        <div role="tabpanel" class="tab-content p-10">
          <div class="flex flex-col items-center">
            <div class="flex">
              <input
                class="input input-bordered input-xs"
                type="number"
                name="options"
                onChange={event => {
                  const value = event?.target.value;
                  setOptions(parseInt(value));
                }}
                value={options()}
              />
              <p>P</p>

              <input
                class="input input-bordered input-xs"
                type="number"
                name="combinations"
                onChange={event => {
                  const value = event?.target.value;
                  setPermutations(parseInt(value));
                }}
                value={permutations()}
              />
            </div>
            <p>{Permutations(options(), permutations())}</p>
          </div>
        </div>
        <input
          type="radio"
          name="option"
          role="tab"
          class="tab ml-20"
          aria-label="Combinations"
        />
        <div role="tabpanel" class="tab-content p-10">
          <div class="flex flex-col items-center">
            <div class="flex">
              <input
                class="input input-bordered input-xs"
                type="number"
                name="options"
                onChange={event => {
                  const value = event?.target.value;
                  setOptions(parseInt(value));
                }}
                value={options()}
              />
              <p>C</p>

              <input
                class="input input-bordered input-xs"
                type="number"
                name="combinations"
                onChange={event => {
                  const value = event?.target.value;
                  setCombinations(parseInt(value));
                }}
                value={combinations()}
              />
            </div>
            <p>{Combinations(options(), combinations())}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
