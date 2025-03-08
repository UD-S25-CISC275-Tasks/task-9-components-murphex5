import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🦃" | "🎆" | "🥚";

const alphabeticalOrder: Record<Holiday, Holiday> = {
    "🎃": "🎄",
    "🎄": "🎆",
    "🎆": "🥚",
    "🥚": "🦃",
    "🦃": "🎃"
};

const yearlyOrder: Record<Holiday, Holiday> = {
    "🥚": "🎆", // Easter → Independence Day
    "🎆": "🎃", // Independence Day → Halloween
    "🎃": "🦃", // Halloween → Thanksgiving
    "🦃": "🎄", // Thanksgiving → Christmas
    "🎄": "🥚" // Christmas → Easter
};

export function CycleHoliday() {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button
                onClick={() => {
                    setHoliday(alphabeticalOrder[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(yearlyOrder[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
