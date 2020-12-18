import React, { useState, useEffect, createContext, useContext } from 'react'
import BoardService from '../../services/board/BoardService'
import BoardContextType from '../../types/BoardContextType'
import BoardPiece from '../../types/BoardPiece'
import BoardContextUpdater from '../updater/BoardContextUpdater'

const BoardContext = createContext({
  items: [] as BoardPiece[],
} as BoardContextType)

const BoardContextProvider: React.FC = (props) => {
  const [items, setItems] = useState([] as BoardPiece[])
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    const updateData = async () => {
      const items = await BoardService.getPieces()
      console.log(items)
      setItems(items)
    }

    if (firstLoad) {
      updateData()
      setFirstLoad(false)
    }

    let handleLocalDataChanged = () => {
      updateData()
    }

    BoardContextUpdater.setCallback(handleLocalDataChanged)

    const cleanBeforeUpdate = () => {
      handleLocalDataChanged = () => {}
    }

    return cleanBeforeUpdate
  }, [items, firstLoad])

  const value = {
    items: items,
  }

  return (
    <BoardContext.Provider value={value}>
      {props.children}
    </BoardContext.Provider>
  )
}

export const useBoard = () => useContext(BoardContext)

export default BoardContextProvider
