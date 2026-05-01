function sum(arr) {
    let res = 0;
    arr.forEach((element) => {
        res += element;
    });
    return res;
}

const Total = (props) => {
    const su = sum(props.parts.map((ob) => ob.exercises));
    return (
        <>
            <p>Number of exercises {su}</p>
        </>
    );
};

export default Total;
