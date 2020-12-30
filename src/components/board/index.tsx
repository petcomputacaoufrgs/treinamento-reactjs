import React, { useState } from 'react'
import Piece from '../piece'
import './styles.css'
import BoardPiece from '../../types/BoardPiece';
import { useBoard } from '../../context/BoardContext'

const BASE_ANIMATION_DELAY = 500

const Board: React.FC = () => {
    
    const boardContext = useBoard()
    const board = boardContext.data
  
    const [lastPieceIndex, setLastPieceIndex] = useState<number>(-1)
    const [score, setScore] = useState(0)
    const [blockClick, setBlockClick] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState<boolean | undefined>(undefined)

    const handleOnClick = (index: number) => {

        if (blockClick) {
            return
        }

        const isSecondPiece = lastPieceIndex !== -1
        const isNotDoubleClick = lastPieceIndex !== index

        if(isSecondPiece && isNotDoubleClick) {
            setBlockClick(true)
            setTimeout(() => startEvaluatePlayersMove(index), BASE_ANIMATION_DELAY)
        } else {
            setLastPieceIndex(index)
        }

        board[index].turned = true
    }

    const startEvaluatePlayersMove = (index: number) => {
        
        const isCorrectPair = board[index].id === board[lastPieceIndex].id
        setCorrectAnswer(isCorrectPair)

        setTimeout(() => endEvaluatePlayersMove(index, isCorrectPair), BASE_ANIMATION_DELAY)       
    }

    const endEvaluatePlayersMove = (index: number, isCorrectPair: boolean) => {

        const currentPiece = board[index]
        const lastPiece = board[lastPieceIndex]

        function cleanPlayersMove() {
            currentPiece.turned = false
            lastPiece.turned = false
        }
        function removePieces() {
            currentPiece.removed = lastPiece.removed = true
        }

        if (isCorrectPair) {
            setScore(score + 1)
            removePieces()
        } else {
            cleanPlayersMove()
        }

        setBlockClick(false)
        setCorrectAnswer(undefined)
        setLastPieceIndex(-1)
    }


    return (
        <div className="board">
            {boardContext.loading ? 
					<div>Carregando...</div> :
					<>
						<div className="board__header"><p>{score}</p></div>
						<div className="board__pieces">
						{board.map((piece, index) => (
							<Piece 
								key={index} 
								piece={piece} 
								correctAnswer={correctAnswer}
								onClick={() => handleOnClick(index)} 
							/>
						))}
						</div>
					</>
            }
        </div>
    )
}

export default Board