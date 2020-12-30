import BoardPiece from "../../types/BoardPiece"

export default interface PieceProps {
    piece: BoardPiece
    correctAnswer: boolean | undefined
    onClick: () => void
    turned?: boolean
    visible?: boolean
}