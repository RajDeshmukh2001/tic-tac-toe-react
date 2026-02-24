import Square from "./Square"

const Board = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-1">
                <Square />
                <Square />
                <Square />

                <Square />
                <Square />
                <Square />
                
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
}

export default Board