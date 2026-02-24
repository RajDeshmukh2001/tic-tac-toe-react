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
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}

export default Board