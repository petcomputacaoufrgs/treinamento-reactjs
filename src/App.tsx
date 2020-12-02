import React from 'react'
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


function shuffle(array:BoardPiece[]) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const App: React.FC = () => {
  const board = shuffle([
    ...getPieces(),
    ...getPieces()
  ])

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

