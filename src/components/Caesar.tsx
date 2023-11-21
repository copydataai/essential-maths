import { createMemo, createSignal } from 'solid-js';
import { Side } from '../utils/caesarCipher';
import type { Component, Setter, Accessor } from 'solid-js';

import './Input.css'

type CaesarProps = {
    placeholder: string;
    setShift: Setter<number>;
    setCipher: Setter<string>;
    side: Accessor<Side>;
    setSide: Setter<Side>;
};

export const Caesar: Component<CaesarProps> = (props) => {
    const { placeholder, setCipher, setShift, side, setSide } = props;

    // TODO: Create a createSignal to verify the shift
    const [inputValue, setInputValue] = createSignal(0);

    // Function to handle key press and limit to positive numbers
    const handleKeyPress = (event) => {
        // Allow only digits and a single dot (for decimal numbers)
        const isValidInput = /^[0-9.]$/.test(event.key);

        // If input is not valid, prevent the default action (typing)
        if (!isValidInput) {
            event.preventDefault();
        }
    };

    // Function to handle input changes
    const handleInputChange = (event) => {
        // Extract the entered value as a number
        let value = parseInt(event.target.value);

        // Check if it's a positive number
        if (!isNaN(value) && value >= 0) {
            setInputValue(value);
        } else {
            // If not a valid positive number, set to 0
            setInputValue(0);
        }
    };


    const getText = (event) => setCipher(event.target.value)
    const changeSide = () => side() == Side.Left ? setSide(Side.Right) : setSide(Side.Left)

    const shiftMemo = createMemo<number>(() => {
        const value = inputValue()
        setShift(value);
        return value;
    })

    const sideMemo = createMemo<string>(() => side() == Side.Left ? "◀ " : "▶ ")
    return (
        <div class="flex flex-col items-center">
            <div class="flex ">
                <label class="label">
                    <span class="w-1/12">Shift</span>
                    <input placeholder='Shift' class="input input-xs w-5/12 max-w-xs" type="number" value={shiftMemo()} onKeyPress={handleKeyPress} onInput={handleInputChange} step="1" min="0" />
                </label>
                <button class="btn btn-secondary" onClick={changeSide}>
                    <span class="text-sm text-primary-900 font-semi-bold">
                        {sideMemo()}
                    </span>
                </button>
            </div>
            <textarea class="textarea textarea-ghost" onInput={getText} placeholder={placeholder} />
        </div>
    );
}
