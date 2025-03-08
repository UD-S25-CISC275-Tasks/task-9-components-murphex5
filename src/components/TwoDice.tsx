import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
const d6 = () => Math.floor(Math.random() * 6) + 1;

export function TwoDice() {
    const [leftDie, setLeftDie] = useState(5);
    const [rightDie, setRightDie] = useState(1);

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    let message = "";
    if (leftDie === rightDie) {
        message = leftDie === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {message && <p>{message}</p>}
        </div>
    );
}
