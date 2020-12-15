import React, { useState, useEffect } from 'react'
import PieceProps from './props'
import './styles.css'

const Piece: React.FC<PieceProps> = ({
    piece,
    onClick
}) => {
    const Image = piece.image

    return (
        <div className="piece" onClick={onClick}>
            { piece.turned
                ? <Image className="piece__front" /> 
                : <div className="piece__front" />
            }
        </div>
    )
}

export default Piece