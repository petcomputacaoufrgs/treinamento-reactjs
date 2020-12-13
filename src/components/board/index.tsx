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

    const [canClick, setCanClick] = useState(true);

    const [didWin, setDidWin] = useState(false);


    useEffect(() => {
        document.title = `Voce tem ${points} pontos`
    }, [points]);

    const handleOnClick = (index: number) => {
        if (canClick) {
            console.log("teste")
            pieceState[index].turned = !pieceState[index].turned
            if (selectedIndex !== -1) {
                console.log("tem duas pecas clicadas")
                if (pieceState[index].name === pieceState[selectedIndex].name) {
                    console.log("duas pecas iguais")
                    setCanClick(false)
                    setTimeout(() => {
                        setPoints(points + 10)
                        pieceState[index].erased = true
                        pieceState[selectedIndex].erased = true
                        setPieceState([...pieceState])
                        setCanClick(true)
                        let pieceErased = true;
                        for (let i = 0; i < pieceState.length; i++) {
                            if (!pieceState[i].erased)
                                pieceErased = false;
                        }
                        if(pieceErased)
                            setDidWin(true);
                    }, 1000);
                }
                else {
                    console.log("duas pecas diferentes")
                    setCanClick(false)
                    setTimeout(() => {
                        pieceState[selectedIndex].turned = false
                        pieceState[index].turned = false
                        setPieceState([...pieceState])
                        setCanClick(true)
                    }, 1000);
                }

                setSelectedIndex(-1)
            }
            else
                setSelectedIndex(index)

            setPieceState([...pieceState])
        }
    }


    return (
        <div><h1>{points}</h1>
            {
                didWin 
                ? <h1>Você Ganhou!</h1>
                : <div className="Board">
                {pieceState.map((piece, index) => (
                    <Piece piece={piece} key={index} onClick={() => handleOnClick(index)} />
                ))}
            </div>
            }
        </div>
    )
}

export default Board