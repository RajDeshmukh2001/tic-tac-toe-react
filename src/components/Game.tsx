import { useState } from "react";
import Board from "./Board"
import { calculateWinner } from "../utils/calculateWinner";

const Game = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handlePlay = (nextSquares: (string | null)[]) => {
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const isDraw = squares.every((box) => box != null);
    const winner = calculateWinner(squares);

    const handleRestart = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    return (
        <div className="space-y-4">
            <div className="space-y-2 text-center">
                <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
            </div>
            {(winner || isDraw) && 
                <button
                    className="w-full py-2 px-4 border border-neutral-600 cursor-pointer"
                    onClick={handleRestart}
                >
                    Start Again
                </button>
            }
        </div>
    )
}

export default Game