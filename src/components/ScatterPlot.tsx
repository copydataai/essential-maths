import type { Component } from "solid-js";
import { createEffect, onMount, onCleanup } from "solid-js";
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

export const ScatterPlot: Component<ScatterPlotProps> = props => {
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
};
