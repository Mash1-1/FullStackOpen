import { useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Review from "./StatisticLine";
import Statistics from "./Statistics";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState(0);

    const handleGoodClick = () => {
        let newGood = good + 1;
        setGood((g) => g + 1);
        calculateAll(newGood, bad, neutral);
    };

    const handeBadClick = () => {
        let newBad = bad + 1;
        setBad((b) => newBad);
        calculateAll(good, newBad, neutral);
    };

    const handleNeutralClick = () => {
        let newNeutral = neutral + 1;
        setNeutral((n) => newNeutral);
        calculateAll(good, bad, newNeutral);
    };

    const calculateAverage = (g, b, a) => {
        let newAverage = (g - b) / a;
        setAverage((a) => newAverage);
    };

    const calculatePositive = (g, a) => {
        setPositive((p) => (g / a) * 100.0);
    };

    const calculateAll = (g, b, n) => {
        let newAll = g + b + n;
        setAll((prevAll) => newAll);
        calculatePositive(g, newAll);
        calculateAverage(g, b, newAll);
    };

    return (
        <>
            <Title txt="give feedback" />
            <Button txt="good" onClick={handleGoodClick} />
            <Button txt="neutral" onClick={handleNeutralClick} />
            <Button txt="bad" onClick={handeBadClick} />
            <Statistics
                good={good}
                bad={bad}
                neutral={neutral}
                positive={positive}
                all={all}
                average={average}
            />
        </>
    );
};

export default App;
