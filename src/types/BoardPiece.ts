export default interface BoardPiece {
    id: number
    image: JSX.Element
    turned: boolean 
    removed?: boolean
}