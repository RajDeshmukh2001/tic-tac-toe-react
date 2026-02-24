import { useState } from "react"

const Square = () => {
    const [value, setValue] = useState<string | null>(null);

    const handleClick = () => {
        setValue("X")
    }

    return (
        <button
            className="w-20 h-20 px-4 py-2 text-4xl font-extrabold border border-neutral-600 flex items-center justify-center" 
            onClick={handleClick}
        >
            {value}
        </button>
    )
}

export default Square