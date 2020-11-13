import React from 'react'
import './App.css'
import { ReactComponent as Orca } from './assets/001-orca.svg'
import { ReactComponent as Stegosaurus } from './assets/002-stegosaurus.svg'
import { ReactComponent as Dragao } from './assets/003-dragao.svg'
import { ReactComponent as Hidra } from './assets/004-hidra.svg'
import { ReactComponent as Coruja } from './assets/005-coruja.svg'
import { ReactComponent as Lobo } from './assets/006-lobo.svg'
import { ReactComponent as Gatinha } from './assets/007-gatinha.svg'
import { ReactComponent as Raposinha } from './assets/008-raposinha.svg'
import Board from './components/board'
import BoardPiece from './components/types/BoardPiece'

const App: React.FC = () => {
  const board = [
    ...getPieces(),
    ...getPieces()
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joguinho da Memória</h1>
        <p>Jogo da memória para uma pessoa</p>
      </header>
      <Board pieceList={board} />
    </div>
  );
}



const getPieces = () => [Orca, Stegosaurus, Dragao, Hidra, Coruja, Lobo, Gatinha, Raposinha]


export default App
