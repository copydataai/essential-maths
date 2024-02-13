import type { Component } from "solid-js";
import { createEffect, onMount, onCleanup } from "solid-js";
import * as Plot from "@observablehq/plot";

type axis = {
  y: number;
};

type BoxPlotProps = {
  data: Array<axis>;
  yAxisTitle: string;
};

export const BoxPlot: Component<BoxPlotProps> = props => {
  let containerRef;

  const createPlot = () => {
    const plot = Plot.plot({
      grid: true,
      strokeWidth: 0.5,
      marks: [
        Plot.boxY(props.data, {
          y: "y",
          x: "",
        }),
      ],
      // fx: { inset: 10, interval: 1 },
      y: {
        label: props.yAxisTitle,
        inset: 6,
      },
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
