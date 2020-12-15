import React, { useEffect, useState } from 'react'
import './styles.css'

const Piece: React.FC<PieceProps> = ({
    piece,
    onClick
}) => {
    const Image = piece.image
    const [isTurned, setIsTurned] = useState(piece.turned)
        
    useEffect(() => {
        setIsTurned(piece.turned)
    }, [piece.turned])

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

/*

useEffect(() => {
    setIsTurned(piece.turned)
}, [piece.turned])
*/