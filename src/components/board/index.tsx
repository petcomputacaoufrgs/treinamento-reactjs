import React, { useState } from 'react'
import Piece from '../piece'
import './styles.css'
import BoardPiece from '../../types/BoardPiece'
import { useBoard } from '../../context/provider/BoardContextProvider'

const BASE_ANIMATION_DELAY = 500

const Board = () => {

    const [pieceState, setPieceState] = useState(useBoard().items)
    const [lastPieceIndex, setLastPieceIndex] = useState<number>(-1)
    const [score, setScore] = useState(0)
    const [blockClick, setBlockClick] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState<boolean | undefined>(undefined)

    const handleOnClick = (index: number) => {
        if (blockClick) {
            return
        }

        if (isSecondPiece()) {
            if (isDoubleClickInSamePiece(index)) {
                return
            }
            const correctPair = isCorrectPair(index)
            setBlockClick(true)
            setTimeout(() => startEvaluatePlayersMove(index, correctPair), BASE_ANIMATION_DELAY)
        } else {
            setLastPieceIndex(index)
        }

        pieceState[index].turned = true
        updatePieceState()
    }

    const startEvaluatePlayersMove = (index: number, isCorrectPair: boolean) => {
        setCorrectAnswer(isCorrectPair)
        setTimeout(() => endEvaluatePlayersMove(index, isCorrectPair), BASE_ANIMATION_DELAY)
    }

    const endEvaluatePlayersMove = (index: number, isCorrectPair: boolean) => { 
        const currentPiece = pieceState[index]
        const lastPiece = pieceState[lastPieceIndex]

        if (isCorrectPair) {
            incrementScore()
            removePieces(currentPiece, lastPiece)
        } else {
            cleanPlayersMove(currentPiece, lastPiece)
        }

        setBlockClick(false)
        setCorrectAnswer(undefined)
        setLastPieceIndex(-1)
        updatePieceState()
    }
    
    const isCorrectPair = (index: number): boolean => (
        pieceState[index].id === pieceState[lastPieceIndex].id
    )

    const incrementScore = () => {
        setScore(score + 1)
    }

    const isSecondPiece = () => (
        lastPieceIndex !== -1
    )

    const isDoubleClickInSamePiece = (index :number): boolean => (
        lastPieceIndex === index
    )

    const cleanPlayersMove = (a: BoardPiece, b: BoardPiece) => {
        a.turned = false
        b.turned = false
    }

    const removePieces = (a: BoardPiece, b: BoardPiece) => {
        a.removed = b.removed = true
    }

    const updatePieceState = () => {
        setPieceState([...pieceState])
    }

    return (
        <div className="board">
            <div className="board__header"><p>{score}</p></div>
            <div className="board__pieces">
                {pieceState.map((piece, index) => (
                    <Piece 
                        piece={piece} 
                        correctAnswer={correctAnswer}
                        key={index} 
                        onClick={() => handleOnClick(index)} />
                ))}
            </div>
        </div>
    )
}

export default Board