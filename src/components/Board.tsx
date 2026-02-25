import React from "react";
import { calculateWinner } from "../utils/calculateWinner";
import Square from "./Square"

type BoardProps = {
    xIsNext: boolean;
    squares: (string | null)[];
    onPlay: (nextSquares: (string | null)[]) => void;
}

const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
    function handleClick(i: number) {
        if (squares[i] || calculateWinner(squares)) {
            return
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);

    return (
        <>
            {
                winner ?
                <h4 className="text-xl font-semibold text-green-700">Winner: {winner}</h4>
                :
                <h4 className="text-xl font-semibold">Next player: {xIsNext ? "X" : "O"}</h4>
            }
            <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, index) => (
                    <React.Fragment key={index}>
                        <Square value={squares[index]} onSquareClick={() => handleClick(index)} />
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default Board