import React, { useEffect, useState } from 'react'
import './styles.css'
import PieceProps from './props'

const Piece: React.FC<PieceProps> = ({
    piece,
    onClick
}) => {
    const [isTurned, setIsTurned] = useState(piece.turned)

    const Image = piece.image

    useEffect(() => {
        setIsTurned(piece.turned)
    }, [piece.turned])
    
    return (
        <div className="piece" onClick={onClick}>
            { isTurned 
                ? <Image className="piece piece__front" /> 
                : <div className="piece piece__back" />
            }
        </div>
    )
}

export default Piece