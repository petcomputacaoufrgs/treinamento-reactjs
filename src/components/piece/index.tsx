import React from 'react'
import PieceProps from './props'
import './styles.css'

const Piece: React.FC<PieceProps> = ({
    piece,
    correctAnswer,
    onClick
}) => {

    const getPieceCardClass = (): string => {
        const baseClass = 'piece__card'

        if (piece.turned) {
            if (correctAnswer !== undefined) {
                if (correctAnswer) {
                    return baseClass + ' score'
                }
                return baseClass + ' flip_back'
            }
            return baseClass + ' flip'
        }
        return baseClass
    } 

    const buff = Buffer.from(piece.image)

    const base64data = buff.toString('base64');

    return (
        <div className='piece'>
            {piece.removed ? 
                <div className='piece__removed'/>
                : 
                <div className={getPieceCardClass()} onClick={piece.removed ? () => {} : onClick}>
                    <div className='piece__back'/>
                    <img alt={piece.name} className='piece__front' src={`data:image/svg+xml;base64,${base64data}`} />
                </div>
            }
        </div>
    )
}

export default Piece