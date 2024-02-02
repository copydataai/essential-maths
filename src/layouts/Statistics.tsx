import { createSignal, createMemo } from "solid-js";

export function StatisticsLayout() {
  const [xAxis, setXAxis] = createSignal<Array<number>>([]);
  const [yAxis, setYAxis] = createSignal<Array<number>>([]);

  return (
    <main class="flex flex-col items-center space-y-2">
      <div class="flex flex-col space-y-2">
        <div class="flex flex-col space-y-2">
          <div class="space-x-2">
            <label htmlFor="x-axis">name</label>
            <input
              class="input input-secondary input-xs"
              type="text"
              name="x-axis"
              value=""
            />
          </div>
          <textarea
            class="textarea textarea-primary"
            onInput={() => {}}
          ></textarea>
        </div>
        <div class="flex flex-col space-y-2">
          <div class="space-x-2">
            <label htmlFor="x-axis">name</label>
            <input
              class="input input-secondary input-xs"
              type="text"
              name="x-axis"
              value=""
            />
          </div>
          <textarea class="textarea textarea-primary"></textarea>
        </div>
      </div>
      <div class=""></div>
    </main>
  );
}
