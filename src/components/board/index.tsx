import React, { useState } from 'react'
import BoardProps from './props'
import './styles.css'

const Board: React.FC<BoardProps> = ({
    pieceList
}) => {

    const [pieceStates, setPieceStates] = useState<number[]>([])

    const handleOnClick = (index: number) => {
        pieceStates.length > 1 
        ? setPieceStates([pieceStates[1], index]) 
        : setPieceStates([pieceStates[0], index])
    }  

    return (
        <div className="Board">
            {pieceList.map((Image, index) => (
                <div className="piece" onClick={() => handleOnClick(index)}>
                {pieceStates.some(e => e === index) ? 
                    <Image className="piece__front" /> : 
                    <div className="piece__front" />
                }
                </div>
            ))}
        </div>
    )
}

export default Board