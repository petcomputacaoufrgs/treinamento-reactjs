export default interface BoardPiece {
    id: number
    image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    turned: boolean 
    removed?: boolean
}