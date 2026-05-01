import { useState } from "react";

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];

    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

    const [selected, setSelected] = useState(0);

    const handleNextAnecdoteClick = () => {
        let newSelected = Math.floor(Math.random() * 100) % anecdotes.length;
        setSelected((s) => newSelected);
    };

    const handleVoteClick = () => {
        let newVotes = [...votes];
        newVotes[selected] += 1;
        setVotes((v) => newVotes);
    };

    const getMaxAnec = () => {
        let ma_votes = votes[0],
            ma_ind = 0;
        for (let i = 0; i < votes.length; i++) {
            if (votes[i] > ma_votes) {
                ma_votes = votes[i];
                ma_ind = i;
            }
        }
        return ma_ind;
    };

    return (
        <>
            <h1>Anecdote of the day</h1>
            {anecdotes[selected]} <br />
            has {votes[selected]} votes <br />
            <button onClick={handleVoteClick}>Vote</button>
            <button onClick={handleNextAnecdoteClick}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            {anecdotes[getMaxAnec()]} <br />
            has {votes[getMaxAnec()]} votes <br />
            <button onClick={handleVoteClick}>Vote</button>
            <button onClick={handleNextAnecdoteClick}>next anecdote</button>
        </>
    );
};

export default App;
