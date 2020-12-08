import React, { useEffect, useState } from 'react'
import BoardProps from './props'
import Piece from '../piece'
import './styles.css'

const Board: React.FC<BoardProps> = ({
    pieceList
}) => {
    const [pieceState, setPieceState] = useState(pieceList)

    const [selectedIndex, setSelectedIndex] = useState(-1)

    const [points, setPoints] = useState(0);

    useEffect(() => { //nao sei onde usa o useffect aqui nesse codigo e fiz sem
        console.log(points)
      }, [points]);

    const handleOnClick = (index: number) => {
        console.log("teste")
        pieceState[index].turned = !pieceState[index].turned
        if (selectedIndex !== -1) {
            console.log("tem duas pecas clicadas")
            if (pieceState[index].name === pieceState[selectedIndex].name) {
                console.log("duas pecas iguais")
                setTimeout(() => {
                    setPoints(points + 10)
                    pieceState[index].erased = true
                    pieceState[selectedIndex].erased = true
                    setPieceState([...pieceState])
                }, 500);
            }
            else {
                console.log("duas pecas diferentes")
                setTimeout(() => {
                    pieceState[selectedIndex].turned = false
                    pieceState[index].turned = false
                    setPieceState([...pieceState])
                }, 500);
            }

            setSelectedIndex(-1)
        }
        else
            setSelectedIndex(index)

        setPieceState([...pieceState])
    }


    return (
        <div><h1>{points}</h1>
        <div className="Board">
            {pieceState.map((piece, index) => (
                <Piece piece={piece} key={index} onClick={() => handleOnClick(index)} />
            ))}
        </div>
        </div>
    )
}

export default Board