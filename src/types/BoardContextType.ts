import BoardPiece from './BoardPiece'

export default interface BoardContextType {
  data: Array<BoardPiece>
  loading: boolean
}

export const defaultContext: BoardContextType = {
  data: [],
  loading: true
}