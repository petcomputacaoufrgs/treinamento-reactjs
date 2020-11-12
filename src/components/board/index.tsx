import React, { useState } from 'react'
import BoardProps from './props'
import Piece from '../piece'
import './styles.css'

const Board: React.FC<BoardProps> = ({
    pieceList
}) => {
    const [pieceState, setPieceState] = useState(pieceList)

    const handleOnClick = (index: number) => {
        pieceState[index].turned = !pieceState[index].turned
        setPieceState([...pieceState])
    }

    return (
        <div className="Board">
            {pieceState.map((piece, index) => (
                <Piece piece={piece} key={index} onClick={() => handleOnClick(index)} />
            ))}
        </div>
    )
}

export default Board