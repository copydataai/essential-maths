import type { Component } from "solid-js";
import { createMemo, createEffect } from "solid-js";
import { onMount, onCleanup } from "solid-js";
import * as Plot from "@observablehq/plot";

type axis = {
  x: number;
  y: number;
};

type ScatterPlotProps = {
  data: Array<axis>;
  xAxisTitle: string;
  yAxisTitle: string;
};

// generate a solid-js component from observablehq as a ScatterPlot component
export function ScatterPlot(props: ScatterPlotProps) {
  let containerRef;

  const createPlot = () => {
    const plot = Plot.plot({
      marks: [Plot.dot(props.data, { x: "x", y: "y" })],
      x: { label: props.xAxisTitle },
      y: { label: props.yAxisTitle },
    });
    // Clear the container before appending the new plot
    containerRef.innerHTML = "";
    containerRef.appendChild(plot);
  };

  // Run createPlot whenever the component mounts
  onMount(createPlot);

  // Re-run createPlot whenever props change
  createEffect(() => {
    createPlot();
  });

  // Cleanup the plot to avoid memory leaks
  onCleanup(() => {
    containerRef.innerHTML = "";
  });

  return <div ref={containerRef}></div>;
}

/* export const ScatterPlot: Component<ScatterPlotProps> = props => {
 *   const { data, xAxisTitle, yAxisTitle } = props;
 *   cons
 *
 *   const plot = Plot.plot({
 *     marks: [
 *       Plot.dot(data, { x: "x", y: "y" }), // Ensure to adjust according to your dataset structure
 *     ],
 *     x: {
 *       label: xAxisTitle,
 *     },
 *     y: {
 *       label: yAxisTitle,
 *     },
 *   });
 *
 *   return <div>{plot}</div>;
 * }; */
