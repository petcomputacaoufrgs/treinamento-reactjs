import React, { useEffect, useState } from 'react'
import './styles.css'
import PieceProps from './props'

const Piece: React.FC<PieceProps> = ({
    piece,
    onClick
}) => {
    const Image = piece.image
    
    return (
        <div className="piece" onClick={onClick}>
            { piece.turned && piece.visible
                ? <Image className="piece piece__front" /> 
                : piece.visible
                    ? <div className="piece piece__back" />
                    : <div className="piece__invisible_piece" />
            }
        </div>
    )
}

export default Piece