import { createMemo, createSignal } from "solid-js";

export enum NumericOptions {
    binary = 2,
    octal = 8,
    hex = 16,
    denary = 10,
}

type Options = {
    [key: string]: {
        main: string;
        options: string[];
        values: NumericOptions[]
    }
}

const Options: Options = {
    binary: {
        main: "binary",
        options: ["octal", "denary", "hexadecimal"],
        values: [NumericOptions.octal, NumericOptions.denary, NumericOptions.hex]
    },
    octal: {
        main: "octal",
        options: ["binary", "denary", "hexadecimal"],
        values: [NumericOptions.binary, NumericOptions.denary, NumericOptions.hex]
    },
    denary: {
        main: "denary",
        options: ["binary", "octal", "hexadecimal"],
        values: [NumericOptions.binary, NumericOptions.octal, NumericOptions.hex]
    },
    hex: {
        main: "hexadecimal",
        options: ["binary", "octal", "denary"],
        values: [NumericOptions.binary, NumericOptions.octal, NumericOptions.denary]
    }
}


export function NumericSystemLayout() {
    const [option, setOption] = createSignal<NumericOptions>(NumericOptions.denary)

    const [number, setNumber] = createSignal<string>("0");
    const getInput = (event) => setNumber(event.target.value)
    const memoOption = createMemo(() => {
        switch (option()) {
            case NumericOptions.binary:
                return Options.binary
            case NumericOptions.octal:
                return Options.octal
            case NumericOptions.hex:
                return Options.hex
        }
        return Options.denary
    })

    const memoNumber = createMemo<number>(() => {
        if (!number()) return 0
        return parseInt(number(), option())
    })

    return (
        <div class="flex flex-col items-center space-y-4">
            <div class="flex justify-between space-x-4">
                <button class="btn btn-neutral hover:btn-secondary" onClick={() => setOption(NumericOptions.binary)}>{NumericOptions.binary}</button>
                <button class="btn btn-neutral hover:btn-secondary" onClick={() => setOption(NumericOptions.octal)}>{NumericOptions.octal}</button>
                <button class="btn btn-neutral hover:btn-secondary" onClick={() => setOption(NumericOptions.denary)}>{NumericOptions.denary}</button>
                <button class="btn btn-neutral hover:btn-secondary" onClick={() => setOption(NumericOptions.hex)}>{NumericOptions.hex}</button>
            </div>
            <div class="flex flex-col items-center space-y-4">
                <span class="font-bold">
                    {memoOption().main}
                </span>
                {/* TODO: limit the input by every type   */}
                <textarea class="textarea textarea-bordered" onInput={getInput}></textarea>
            </div>
            <div class="flex items-center">
                <div class="flex flex-col items-center">
                    <span class="font-semi-bold">{memoOption().options.at(0)}</span>
                    <textarea class="textarea textarea-xs" disabled>{memoNumber().toString(memoOption().values.at(0))}</textarea>
                </div>
                <div class="flex flex-col items-center ">
                    <span class="font-semi-bold">{memoOption().options.at(1)}</span>
                    <textarea class="textarea textarea-xs" disabled>{memoNumber().toString(memoOption().values.at(1))}</textarea>
                </div>
                <div class="flex flex-col items-center">
                    <span class="font-semi-bold">{memoOption().options.at(2)}</span>
                    <textarea class="textarea uppercase textarea-xs" disabled>{memoNumber().toString(memoOption().values.at(2))}</textarea>
                </div>
            </div>
        </div>
    );
}
