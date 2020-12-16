import React, { useEffect } from 'react'
import './App.css'
import { ReactComponent as Diplodocus } from './assets/001-diplodocus.svg'
import { ReactComponent as Stegosaurus } from './assets/002-stegosaurus.svg'
import { ReactComponent as Dinosaur } from './assets/003-dinosaur.svg'
import { ReactComponent as Triceratops } from './assets/004-triceratops.svg'
import { ReactComponent as Diplodocus2 } from './assets/005-diplodocus-1.svg'
import { ReactComponent as Stegosaurus2 } from './assets/006-stegosaurus-1.svg'
import { ReactComponent as Stegosaurus3 } from './assets/007-stegosaurus.svg'
import { ReactComponent as Diplodocus3 } from './assets/008-diplodocus-2.svg'
import Board from './components/board'
import BoardPiece from './components/types/BoardPiece'
import PieceService from './services/PieceService'


const App: React.FC = () => {
  const board = [
    ...getPieces(),
    ...getPieces()
  ]

  const boardRandom = board.sort(() => Math.random() - 0.5)
  
  const serviceResponse = async () => {
    const theBoard = await PieceService.getAllPieces()
    console.log(theBoard)
  }
  
  useEffect(() => {serviceResponse()}, [])
  
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

const getPieces = (): BoardPiece[] => {
  return [
    {
      image: Diplodocus,
      turned: false,
      visible: true
    },
    {
      image: Stegosaurus,
      turned: false,
      visible: true
    },
    {
      image: Dinosaur,
      turned: false,
      visible: true
    },
    {
      image: Triceratops,
      turned: false,
      visible: true
    },
    {
      image: Diplodocus2,
      turned: false,
      visible: true
    },
    {
      image: Stegosaurus2,
      turned: false,
      visible: true
    },
    {
      image: Stegosaurus3,
      turned: false,
      visible: true
    },
    {
      image: Diplodocus3,
      turned: false,
      visible: true
    }
  ]
}

export default App

