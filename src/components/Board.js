import { useState } from 'react';
import { calculateWinner } from '../helper';
import Square from './Sqaure';
import GameFinished from './GameFinished';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);




    const squareClickHandler = (i) => {

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        const updatedSquares = [...squares];
        updatedSquares[i] = xIsNext ? 'X' : 'O';
        setXisNext(prevState => !prevState);
        setSquares(updatedSquares);
    }


    const allSquareFilled = (squares.every(q => q !== null));

    const renderSquare = (i) => {

        return <Square id={i} value={squares[i]} onClick={squareClickHandler} />;
    }

    const resetHandler = () => {
        setSquares(Array(9).fill(null));
    }

    const winner = (calculateWinner(squares));
    const status = winner && `${winner} Wins`;

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            {winner && <GameFinished onClick={resetHandler} winner={winner} />}
            {!winner && allSquareFilled && <GameFinished onClick={resetHandler} winner="tied" />}
        </div>
    );
};

export default Board;