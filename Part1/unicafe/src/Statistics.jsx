import Title from "./Title";
import StaticticLine from "./StatisticLine";

const Statistics = (props) => {
    if (props.all != 0) {
        return (
            <>
                <Title txt="statistics" />
                <table>
                    <StaticticLine txt="good" count={props.good} />
                    <StaticticLine txt="neutral" count={props.neutral} />
                    <StaticticLine txt="bad" count={props.bad} />
                    <StaticticLine txt="all" count={props.all} />
                    <StaticticLine txt="average" count={props.average} />
                    <StaticticLine txt="positive" count={props.positive + " %"} />
                </table>
            </>
        );
    } else {
        return <p>No feedback given</p>;
    }
};

export default Statistics;
