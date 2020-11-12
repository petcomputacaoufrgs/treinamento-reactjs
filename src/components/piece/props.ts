import BoardPiece from "../types/BoardPiece"

export default interface PieceProps {
    piece: BoardPiece
    onClick: () => void
}