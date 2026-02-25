const WINNING_COMBINATIONS = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
];

export const calculateWinner = (squares: (string | null)[]) => {
    for (const combination of WINNING_COMBINATIONS) {
        const [firstIndex, secondIndex, thirdIndex] = combination;

        const firstSquare = squares[firstIndex];
        const secondSquare = squares[secondIndex];
        const thirdSquare = squares[thirdIndex];

        if (firstSquare !== null && firstSquare === secondSquare && firstSquare === thirdSquare) {
            return firstSquare;
        }
    }
    return null;
}