

const Square = (props) => {
    const classes = props.value === 'X' ? 'redSign' : 'blueSign';

    const squareClickHandler = () => {
        props.onClick(props.id);
    }

    return (
        <button className="square" onClick={squareClickHandler}>
            <p className={classes}>
                {props.value}
            </p>
        </button>
    )
}

export default Square;