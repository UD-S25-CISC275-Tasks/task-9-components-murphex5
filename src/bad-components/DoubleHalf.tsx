import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ButtonProps {
    setDhValue(dhValue: number): void;
    dhValue: number;
}

function Doubler({ setDhValue, dhValue }: ButtonProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue + dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setDhValue, dhValue }: ButtonProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue / 2);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue} />
            <Halver setDhValue={setDhValue} dhValue={dhValue} />
        </div>
    );
}
