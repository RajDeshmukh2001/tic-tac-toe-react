type SquareProps = {
    value: string | null;
    onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {

    return (
        <button
            className="w-20 h-20 px-4 py-2 text-4xl font-extrabold border border-neutral-600 flex items-center justify-center"
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}

export default Square