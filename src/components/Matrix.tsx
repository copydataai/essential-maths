import { For, createMemo } from "solid-js";
import type { Accessor, Component } from "solid-js";

export type MatrixProps = {
    matrix: Accessor<Array<Array<number>> | undefined>;
}

export const Matrix: Component<MatrixProps> = (props) => {
    const { matrix } = props;

    createMemo(() => {
        console.log("has", matrix()) 
    })
    
    return (
            <div class="flex items-center">
                <span class="text-[11rem]">[</span>
                <For each={matrix()} fallback={
                    <span class="loading loading-spinner loading-xl"></span>
                }>
                    { (rowValue, r) => (
                        <div class="grid grid-cols-1 flex-wrap mt-9">
                            <For each={rowValue} fallback={<span class="loading loading-spinner loading-sm"></span>} >
                                { (columnValue, c) => (
                                    <div class="indicator mb-3 mr-3">
                                        <kbd class="kbd kbd-md">{columnValue}</kbd>
                                        <div class="indicator-item indicator-bottom badge badge-secondary badge-xs text-xs">{`${r() + 1}${c() + 1}`}</div>
                                    </div>
                                )}
                            </For>
                        </div>
                    )}
                </For>
                <span class="text-[11rem]">]</span>
            </div>
    );
}
