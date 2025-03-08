import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {isVisible && <p>42</p>}
        </div>
    );
}
