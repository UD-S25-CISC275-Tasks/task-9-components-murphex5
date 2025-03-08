import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt() {
    const [attempts, setAttempts] = useState(4);
    const [inProgress, setInProgress] = useState(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setInProgress(true);
            setAttempts((prev) => prev - 1);
        }
    };

    const stopQuiz = () => {
        setInProgress(false);
    };

    const addAttempt = () => {
        setAttempts((prev) => prev + 1);
    };

    return (
        <div>
            <p>Attempts: {attempts}</p>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
