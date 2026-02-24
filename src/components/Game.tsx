import { useState } from "react";
import Board from "./Board"

const Game = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handlePlay = (nextSquares: (string | null)[]) => {
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="space-y-4">
            <div className="space-y-2 text-center">
                <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
            </div>
        </div>
    )
}

export default Game