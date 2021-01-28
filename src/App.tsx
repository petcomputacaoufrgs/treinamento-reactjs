import React from 'react'
import './App.css'
import Board from './components/board'
import BoardContextProvider from './context/BoardContext'

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="app__header">
        <h1>Joguinho da Memória</h1>
        <h2>Jogo da memória para uma pessoa</h2>
      </header>
      <BoardContextProvider>
        <Board />
      </BoardContextProvider>
    </div>
  );
}

export default App

