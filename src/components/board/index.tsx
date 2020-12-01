import React, { useState } from 'react'
import BoardProps from './props'
import Piece from '../piece'
import './styles.css'


import { ReactComponent as Diplodocus } from '../../assets/001-diplodocus.svg'

const Board: React.FC<BoardProps> = ({
    pieceList
}) => {
    const [pieceState, setPieceState] = useState(pieceList)

    const handleOnClick = (index: number) => {
        pieceState[index].turned = !pieceState[index].turned
        console.log(pieceState[index].image === Diplodocus)
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