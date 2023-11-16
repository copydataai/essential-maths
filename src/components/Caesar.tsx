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

    const sideMemo = createMemo<string>(() => side() == Side.Left ? "Left" : "Right")
    return (
        <div class="flex flex-col items-center space-y-4">
            <div class="flex space-x-4 items-center">
                <label class="space-x-2">
                    <span>Shift</span>
                    <input class="w-12 rounded" type="number" value={shiftMemo()} onKeyPress={handleKeyPress} onInput={handleInputChange} step="1" min="0" />
                </label>
                <label class="bg-gray-100">
                    <button class="flex align-center py-2 px-3 border-2 border-black hover:bg-primary-400 text-black hover:text-primary-400 text-base rounded-full space-x-2" onClick={changeSide}>
                        <span class="text-sm text-primary-900 font-semi-bold">
                            {sideMemo()}
                        </span>
                    </button>
                </label>
            </div>
            <textarea class="bg-primary-200" onInput={getText} placeholder={placeholder} />
        </div>
    );
}
