const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.txt}</td> <td>{props.count}</td>
        </tr>
    );
};

export default StatisticLine;
