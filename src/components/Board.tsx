import { useState } from "react"
import Square from "./Square"

const Board = () => {
    const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));

    return (
        <>
            <div className="grid grid-cols-3 gap-1">
                <Square value={squares[0]} />
                <Square value={squares[1]} />
                <Square value={squares[2]} />

                <Square value={squares[4]} />
                <Square value={squares[5]} />
                <Square value={squares[6]} />
                
                <Square value={squares[7]} />
                <Square value={squares[8]} />
                <Square value={squares[9]} />
            </div>
        </>
    )
}

export default Board