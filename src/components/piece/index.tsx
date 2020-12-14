import React from 'react'
import './styles.css'
import PieceProps from './props'

const Piece: React.FC<PieceProps> = ({
    piece,
    onClick
}) => {
    const Image = piece.image

    return piece.erased
        ? <div className="removed-piece"></div>
        : <div>
            <div className={piece.turned ? "piece-back" : "rotated piece-back"}>
                <Image className="piece__front" />
            </div>
            <div className={piece.turned ? "rotated piece" : "piece"} onClick={onClick}>
                <div className="piece__front" />
            </div>
        </div>
}

export default Piece