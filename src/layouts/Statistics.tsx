import { createSignal, createMemo, onMount } from "solid-js";
import { ScatterPlot } from "../components/ScatterPlot";

export function StatisticsLayout() {
  const [xAxis, setXAxis] = createSignal<Array<number>>([1, 2, 3, 4]);
  const [yAxis, setYAxis] = createSignal<Array<number>>([1, 2, 3, 4]);

  const [xTitle, setXTitle] = createSignal<string>("age");
  const [yTitle, setYTitle] = createSignal<string>("time");

  const dataset = createMemo(() => {
    const x = xAxis();
    const y = yAxis();
    const length = Math.min(x.length, y.length);
    const results = new Array(length);

    // a loop to iterate the length an create a new array of with x and y values
    for (let i = 0; i < length; i++) {
      results[i] = { x: parseInt(x[i]), y: parseInt(y[i]) };
    }
    return results;
  });

  return (
    <main class="flex flex-col items-center space-y-2">
      <div class="flex flex-col space-y-2">
        <div class="flex flex-col space-y-2">
          <div class="space-x-2">
            <label htmlFor="x-axis">x-axis</label>
            <input
              class="input input-secondary input-xs"
              type="text"
              name="x-axis"
              value={xTitle()}
              onChange={e => {
                setXTitle(e.target.value);
              }}
            />
          </div>
          <textarea
            class="textarea textarea-primary"
            value={xAxis().toString()}
            onChange={e => {
              const value = e.target.value;
              const data = value.replace(/[^,\d]/g, "").split(",");
              setXAxis(data);
            }}
          ></textarea>
        </div>
        <div class="flex flex-col space-y-2">
          <div class="space-x-2">
            <label htmlFor="y-axis">y-axis</label>
            <input
              class="input input-secondary input-xs"
              type="text"
              name="y-axis"
              value={yTitle()}
              onChange={e => {
                setYTitle(e.target.value);
              }}
            />
          </div>
          <textarea
            class="textarea textarea-primary"
            value={yAxis().toString()}
            onChange={e => {
              const value = e.target.value;
              setYAxis(value.replace(/[^,\d]/g, "").split(","));
            }}
          ></textarea>
        </div>
      </div>
      <ScatterPlot
        data={dataset()}
        xAxisTitle={xTitle()}
        yAxisTitle={yTitle()}
      />
    </main>
  );
}
