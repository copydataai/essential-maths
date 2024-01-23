import { createMemo, createSignal } from "solid-js";
import { Side } from "../utils/caesarCipher";
import type { Component, Setter } from "solid-js";

import "./Input.css";

type CaesarProps = {
  placeholder: string;
  setShift: Setter<number>;
  setCipher: Setter<string>;
  setSide: Setter<Side>;
};

export const Caesar: Component<CaesarProps> = props => {
  const { placeholder, setCipher, setShift, setSide } = props;

  const [inputValue, setInputValue] = createSignal(0);

  // Function to handle key press and limit to positive numbers
  const handleKeyPress = event => {
    // Allow only digits and a single dot (for decimal numbers)
    const isValidInput = /^[0-9.]$/.test(event.key);

    // If input is not valid, prevent the default action (typing)
    if (!isValidInput) {
      event.preventDefault();
    }
  };

  // Function to handle input changes
  const handleInputChange = event => {
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

  const getText = event => setCipher(event.target.value);

  const shiftMemo = createMemo<number>(() => {
    const value = inputValue();
    setShift(value);
    return value;
  });

  return (
    <div class="mb-4 flex flex-col items-center">
      <div class="mb-2 flex items-center justify-center">
        <label class="label w-5/12">
          <span class="label-text text-xs">Shift</span>
          <input
            placeholder="Shift"
            class="input input-bordered input-accent input-xs w-5/12"
            type="number"
            value={shiftMemo()}
            onKeyPress={handleKeyPress}
            onInput={handleInputChange}
            step="1"
            min="0"
          />
        </label>
        <label class="swap swap-rotate ml-1">
          <input
            type="checkbox"
            onClick={() =>
              setSide(side => (side === Side.Left ? Side.Right : Side.Left))
            }
            checked
          />
          <img
            class="swap-off h-8 w-8 rounded-full bg-primary fill-current"
            src="/arrow-left.svg"
            alt="arrow-left"
          />
          <img
            class="swap-on h-8 w-8 rounded-full bg-primary fill-current"
            src="/arrow-right.svg"
            alt="arrow-right"
          />
        </label>
      </div>
      <textarea
        class="textarea textarea-secondary"
        onInput={getText}
        placeholder={placeholder}
      />
    </div>
  );
};
