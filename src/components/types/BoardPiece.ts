export default interface BoardPiece {
    image: () => JSX.Element
    turned: boolean 
    visible: boolean
}