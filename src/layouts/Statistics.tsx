import { createSignal, createMemo, onMount, Show } from "solid-js";
import { ScatterPlot } from "../components/ScatterPlot";
import { BoxPlot } from "../components/BoxPlot";

export function StatisticsLayout() {
  const [xAxis, setXAxis] = createSignal<Array<number>>([1, 2, 3, 4]);
  const [yAxis, setYAxis] = createSignal<Array<number>>([1, 2, 3, 4]);

  const [xTitle, setXTitle] = createSignal<string>("age");
  const [yTitle, setYTitle] = createSignal<string>("time");

  const [itsCartesian, setItsCartesian] = createSignal<boolean>(false);

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

  const boxplotDataset = createMemo(() => {
    const y = yAxis();

    // return an array with the values of the y axis
    const results = new Array(y.length);

    for (let i = 0; i < y.length; i++) {
      results[i] = { y: parseInt(y[i]) };
    }

    return results;
  });

  return (
    <main class="flex flex-col items-center space-y-2">
      <div class="form-control flex items-center">
        <label class="label cursor-pointer space-x-2">
          <span class="label-text">Boxplot</span>
          <input
            type="checkbox"
            class="toggle toggle-primary"
            onClick={() => setItsCartesian(cartesian => !cartesian)}
          />
          <span class="label-text">ScatterPlot</span>
        </label>
      </div>
      <Show
        when={itsCartesian()}
        fallback={
          <div class="flex flex-col items-center space-y-2">
            <div class="flex flex-col space-y-2">
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
                    setYAxis(value.replace(/[^,\d-]/g, "").split(","));
                  }}
                ></textarea>
              </div>
            </div>
            <BoxPlot data={boxplotDataset()} yAxisTitle={yTitle()} />
          </div>
        }
      >
        <div class="flex flex-col space-y-2">
          <div class="flex space-x-5">
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
                  const data = value.replace(/[^,\d-]/g, "").split(",");
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
                  setYAxis(value.replace(/[^,\d-]/g, "").split(","));
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <ScatterPlot
          data={dataset()}
          xAxisTitle={xTitle()}
          yAxisTitle={yTitle()}
        />
      </Show>
    </main>
  );
}
