import { type Component, createSignal, createMemo, onCleanup, For, type Setter, type Accessor } from "solid-js";
import "./Input.css"


export type MatrixProps = {
    matrix: Accessor<Array<Array<number>>>;
    setMatrix: Setter<Array<Array<number>>>;
}


export const SetMatrix: Component<MatrixProps> = (props) => {
    const { matrix, setMatrix } = props;
    const [size, setSize ] = createSignal<number>(2);
    const [row, setRow] = createSignal(0);
    const [column, setColumn] = createSignal(0);


    const getSize = (event: any) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setSize(value);
        }
        setMatrix(Array.from(Array(value), () => Array(value).fill(0)));    
    }

    const setMatrixValue = (event: any) => {
        const value = parseInt(event.target.value);
        if (isNaN(value)) return  
        console.log("action", value, row(), column())
        setMatrix((matrix) => {
                const newMatrix = [...matrix];
                console.log(newMatrix[row()][column()], value)
                newMatrix[row()][column()] = value;
                console.log(newMatrix[row()][column()])
                return newMatrix
            })
    }
    
    // TODO: make a props to communicate the matrix to the parent component
    return (
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
                <input type="range" onChange={getSize} min="2" max="3" value="2" class="range" step="1" />
                <div class="w-full flex justify-between text-xs">
                    <span>2</span>
                    <span>3</span>
                </div>
            </div>
            <div class="flex items-center">
                <span class="text-9xl">[</span>
                <For each={matrix()} fallback={
                    <span class="loading loading-spinner loading-xl"></span>
                }>
                    { (rowValue, r) => (
                        <div class="flex flex-col mt-6">
                            <For each={rowValue} fallback={<span class="loading loading-spinner loading-sm"></span>} >
                                { (columnValue, c) => (
                                    <div class="indicator mr-3 mb-3">
                                        <input class="input input-primary input-xs w-full max-w-xs" type="number" value={columnValue} onInput={(event) => {setRow(r()); setColumn(c()); setMatrixValue(event)}}/>
                                        <div class="indicator-item indicator-bottom badge badge-secondary badge-xs text-xs">{`${r() + 1}${c() + 1}`}</div>
                                    </div>
                                )}
                            </For>
                        </div>
                    )}
                </For>
                <span class="text-9xl">]</span>
            </div>
        </div>
    );
}
