
const GameFinished = (props) => {
    const statement = props.winner === 'tied' ? 'You guys tied' : `${props.winner} WON`
    const classes = `btn reset-btn ${props.winner === 'X' ? 'x-win' : 'o-win'}`
    return (
        <>
            <div className="overlay">
            </div>
            <div className="modal">
                <h1>{statement} !</h1>
                <button className={classes} onClick={props.onClick}>
                    Reset
                </button>
            </div>
        </>
    )
}

export default GameFinished;