import React, { useContext, useEffect, useState } from "react"
import BoardService from "../../services/board/BoardService"
import { defaultContext } from "../../types/BoardContextType"
import BoardPiece from "../../types/BoardPiece"
import ArrayUtils from "../../utils/ArrayUtils"

const BoardContext = React.createContext(defaultContext)

const BoardProvider: React.FC = ({
    children
}) => {
    const [value, setValue] = useState(defaultContext)
      
    useEffect(() => {
        const getData = async () => {
            const serverData = await BoardService.getAllPiecesFromServer()
            if (serverData) {
                const newData: Array<BoardPiece> = serverData.map((data) => ({
                    id: data.id,
                    image: data.value,
                    turned: false,
                    removed: false,
                    name: data.name
                }))

                updateData(BoardService.doubleAndShufflePieces(newData))
            }
        }

        let updateData = (newData: Array<BoardPiece>) => {
            setValue({
                data: newData,
                loading: false
            })
        }   

        getData()
    }, [])

    return (
        <BoardContext.Provider value={value}>
            {children}
        </BoardContext.Provider>
    )
}

export const useBoard = () => useContext(BoardContext)

export default BoardProvider