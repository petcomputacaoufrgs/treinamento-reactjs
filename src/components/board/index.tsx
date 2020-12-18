import React, { useState } from 'react'
import Piece from '../piece'
import './styles.css'
import BoardPiece from '../../types/BoardPiece';
import { useBoard } from '../../context/provider/BoardContextProvider'

const BASE_ANIMATION_DELAY = 500

const Board: React.FC = () => {
    
    const boardContext = useBoard()
    const board = boardContext.data
  
    const [lastPieceIndex, setLastPieceIndex] = useState<number>(-1)
    const [score, setScore] = useState(0)
    const [blockClick, setBlockClick] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState<boolean | undefined>(undefined)

    const handleOnClick = (index: number) => {

        function isSecondPiece() {
            return lastPieceIndex !== -1
        }
        function isCorrectPair() {
            return board[index].id === board[lastPieceIndex].id
        }
        function startEvaluatePlayersMove() {
            const correctPair = isCorrectPair()
            setCorrectAnswer(correctPair)
            setTimeout(() => endEvaluatePlayersMove(index, correctPair), BASE_ANIMATION_DELAY)
        }
        function isDoubleClickInSamePiece(index :number) {
            return lastPieceIndex === index
        }

        if (blockClick) {
            return
        }

        if (isSecondPiece()) {
            if (isDoubleClickInSamePiece(index)) {
                return
            }
            setBlockClick(true)
            setTimeout(() => startEvaluatePlayersMove(), BASE_ANIMATION_DELAY)
        } else {
            setLastPieceIndex(index)
        }

        board[index].turned = true
    }

    const endEvaluatePlayersMove = (index: number, isCorrectPair: boolean) => { 
        const currentPiece = board[index]
        const lastPiece = board[lastPieceIndex]

        function cleanPlayersMove(a: BoardPiece, b: BoardPiece) {
            a.turned = false
            b.turned = false
        }
        function removePieces(a: BoardPiece, b: BoardPiece) {
            a.removed = b.removed = true
        }

        if (isCorrectPair) {
            setScore(score + 1)
            removePieces(currentPiece, lastPiece)
        } else {
            cleanPlayersMove(currentPiece, lastPiece)
        }

        setBlockClick(false)
        setCorrectAnswer(undefined)
        setLastPieceIndex(-1)
    }


    return (
        <div className="board">
            {boardContext.loading ? 
                <div>Carregando...</div>
                :
                <>
                <div className="board__header"><p>{score}</p></div>
                    <div className="board__pieces">
                    {board.map((piece, index) => (
                        <Piece 
                            key={index} 
                            piece={piece} 
                            correctAnswer={correctAnswer}
                            onClick={() => handleOnClick(index)} />
                    ))}
                </div>
                </>
            }
        </div>
    )
}

export default Board