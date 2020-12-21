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
import PieceService from './services/PieceService'

const App: React.FC = () => {
  const board = [
    ...getPieces(),
    ...getPieces()
  ]

  function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>Joguinho da Memória</h1>
        <h2>Jogo da memória para uma pessoa</h2>
      </header>
      <div className="app__body">
        <Board pieceList={shuffleArray(board)} />
      </div>
    </div>
  );
}

const getPieces = (): BoardPiece[] => {
  return [
    {
      id: 1,
      image: Orca,
      turned: false
    },
    {
      id: 2,
      image: Stegosaurus,
      turned: false
    },
    {
      id: 3,
      image: Dragao,
      turned: false
    },
    {
      id: 4,
      image: Hidra,
      turned: false
    },
    {
      id: 5,
      image: Coruja,
      turned: false
    },
    {
      id: 6,
      image: Lobo,
      turned: false
    },
    {
      id: 7,
      image: Gatinha,
      turned: false
    },
    {
      id: 8,
      image: Raposinha,
      turned: false
    }
  ]
}

export default App
