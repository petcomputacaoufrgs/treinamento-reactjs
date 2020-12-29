import React from 'react'
import './App.css'
import Board from './components/board'
import { usePieces } from './context/provider/piece'


const App: React.FC = () => {  
  const board = usePieces()
  const boardRandom = board.data.sort(() => Math.random() - 0.5)
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Joguinho da Memória</h1>
        <p>Jogo da memória para uma pessoa</p>
      </header>
      <Board pieceList={boardRandom} />
    </div>
  );
}

export default App

