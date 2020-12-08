export default interface BoardPiece {
    image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    turned: boolean 
    name: string
    erased: boolean
}