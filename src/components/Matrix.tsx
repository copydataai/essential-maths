import { For, createMemo } from "solid-js";
import type { Accessor, Component } from "solid-js";

export type MatrixProps = {
  matrix: Accessor<Array<Array<number>> | undefined>;
};

export const Matrix: Component<MatrixProps> = props => {
  const { matrix } = props;

  createMemo(() => {
    console.log("has", matrix());
  });

  return (
    <div class="flex items-center">
      <span class="text-[11rem]">[</span>
      <For
        each={matrix()}
        fallback={<span class="loading-xl loading loading-spinner"></span>}
      >
        {(rowValue, r) => (
          <div class="mt-9 grid grid-cols-1 flex-wrap">
            <For
              each={rowValue}
              fallback={
                <span class="loading loading-spinner loading-sm"></span>
              }
            >
              {(columnValue, c) => (
                <div class="indicator mb-3 mr-3">
                  <kbd class="kbd kbd-md">{columnValue}</kbd>
                  <div class="badge indicator-item badge-secondary badge-xs indicator-bottom text-xs">{`${
                    r() + 1
                  }${c() + 1}`}</div>
                </div>
              )}
            </For>
          </div>
        )}
      </For>
      <span class="text-[11rem]">]</span>
    </div>
  );
};
