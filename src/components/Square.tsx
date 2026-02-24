type SquareProps = {
    value: string | null,
}

const Square = ({ value }: SquareProps) => {

    return (
        <button
            className="w-20 h-20 px-4 py-2 text-4xl font-extrabold border border-neutral-600 flex items-center justify-center"
        >
            {value}
        </button>
    )
}

export default Square