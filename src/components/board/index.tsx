import React, { useState, useEffect } from 'react'
import Piece from '../piece'
import './styles.css'
import BoardPiece from '../../types/BoardPiece';
import { useBoard } from '../../context/provider/BoardContextProvider'
import ArrayUtils from '../../utils/ArrayUtils'

const BASE_ANIMATION_DELAY = 500

const Board: React.FC = () => {
    const boardContext = useBoard()
  
    const [boardState, setBoardState] = useState<Array<BoardPiece>>([])
    const [lastPieceIndex, setLastPieceIndex] = useState<number>(-1)
    const [score, setScore] = useState(0)
    const [blockClick, setBlockClick] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState<boolean | undefined>(undefined)

    useEffect(() => {

        const dataDeepCopy = JSON.parse(JSON.stringify(boardContext.data))

        const board = [...boardContext.data, ...dataDeepCopy]
        
        const shuffledBoard = ArrayUtils.shuffleArray(board)

        setBoardState(shuffledBoard)
    }, [boardContext])


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

        boardState[index].turned = true
        updatePieceState()
    }

    const startEvaluatePlayersMove = (index: number, isCorrectPair: boolean) => {
        setCorrectAnswer(isCorrectPair)
        setTimeout(() => endEvaluatePlayersMove(index, isCorrectPair), BASE_ANIMATION_DELAY)
    }

    const endEvaluatePlayersMove = (index: number, isCorrectPair: boolean) => { 
        const currentPiece = boardState[index]
        const lastPiece = boardState[lastPieceIndex]

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
        boardState[index].id === boardState[lastPieceIndex].id
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
        setBoardState([...boardState])
    }

    return (
        <div className="board">
            {boardContext.loading ? 
                <div>Carregando...</div>
                :
                <>
                <div className="board__header"><p>{score}</p></div>
                    <div className="board__pieces">
                    {boardState.map((piece, index) => (
                        <Piece 
                            piece={piece} 
                            correctAnswer={correctAnswer}
                            key={index} 
                            onClick={() => handleOnClick(index)} />
                    ))}
                </div>
                </>
            }
        </div>
    )
}

export default Board