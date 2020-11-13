import React from 'react'
import './styles.css'
import PieceProps from './props'

const Piece: React.FC<PieceProps> = ({
    piece,
    onClick
}) => {
    const Image = piece.image
    
    return (
        <div className="piece" onClick={onClick}>
            { piece.turned 
                ? <Image className="piece piece__front" /> 
                : <div className="piece piece__back" />
            }
        </div>
    )
}

export default Piece