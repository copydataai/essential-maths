import { createMemo, createSignal, Show } from "solid-js";
import { createFunctionFromString } from "../utils/MathFunction";
import "../components/Input.css";

export function FunctionLayout() {
  const [domain, setDomain] = createSignal<number>(3);

  const [func, setFunc] = createSignal<string>("x^2+2x+4x");
  const [error, setError] = createSignal<string>("");
  const getDomain = event => setDomain(event.target.value);
  const getFunction = event => setFunc(event.target.value);

  const memoResult = createMemo<string>(() => {
    if (func() && domain()) {
      try {
        const fnCallback = createFunctionFromString(func());
        const result = fnCallback(domain());
        setError("");

        return result.toString();
      } catch (e) {
        setError(
          "please reload the page and please to sure to don't leave any character out of the equation"
        );
      }
    }
    return "";
  });

  return (
    <main class="flex flex-col items-center space-y-4">
      <div>
        <label class="font-black">
          f(
          <input
            class="input input-primary input-xs w-8"
            type="number"
            onInput={getDomain}
            placeholder="x"
            value="3"
          />
          )
        </label>
        <label class="font-black"> = </label>
        <input
          class="input input-secondary input-md"
          type="text"
          onInput={getFunction}
          placeholder="x^2+2x+4x"
        />
      </div>
      <Show
        when={error() != ""}
        fallback={
          <div class="card">
            <div class="card-body ">
              <h2 class="card-title">Result</h2>
              <p class="font-black text-accent">{memoResult()}</p>
            </div>
          </div>
        }
      >
        <div role="alert" class="alert alert-error">
          <img
            class="h-6 w-6 shrink-0 stroke-current"
            src="/error.svg"
            alt=""
          />
          <span>{error()}</span>
        </div>
      </Show>
    </main>
  );
}
