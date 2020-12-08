import React from 'react'
import './App.css'
import { ReactComponent as Angel } from './assets/angel.svg'
import { ReactComponent as Astronaut } from './assets/astronaut.svg'
import { ReactComponent as Dancer } from './assets/dancer.svg'
import { ReactComponent as Fighter } from './assets/fighter.svg'
import { ReactComponent as Flower } from './assets/flower.svg'
import { ReactComponent as Pirate } from './assets/pirate.svg'
import { ReactComponent as Programmer } from './assets/programmer.svg'
import { ReactComponent as Super } from './assets/super.svg'
import Board from './components/board'
import BoardPiece from './components/types/BoardPiece'

const App: React.FC = () => {
  const board = [
    ...getPieces(),
    ...getPieces()
  ]

  const boardRandom = board.sort(() => Math.random() - 0.5)

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
      image: Angel,
      turned: false,
      name: "Angel",
      erased: false
    },
    {
      image: Astronaut,
      turned: false,
      name: "Astronaut",
      erased: false
    },
    {
      image: Dancer,
      turned: false,
      name: "Dancer",
      erased: false
    },
    {
      image: Fighter,
      turned: false,
      name: "Fighter",
      erased: false
    },
    {
      image: Flower,
      turned: false,
      name: "Flower",
      erased: false
    },
    {
      image: Pirate,
      turned: false,
      name: "Pirate",
      erased: false
    },
    {
      image: Programmer,
      turned: false,
      name: "Programmer",
      erased: false
    },
    {
      image: Super,
      turned: false,
      name: "Super",
      erased: false
    }
  ]
}



export default App
