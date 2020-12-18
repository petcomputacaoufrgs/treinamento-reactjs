import BoardServerService from './BoardServerService'
import BoardPiece from '../../types/BoardPiece'
import { ReactComponent as Orca } from '../../assets/001-orca.svg'
import { ReactComponent as Stegosaurus } from '../../assets/002-stegosaurus.svg'
import { ReactComponent as Dragao } from '../../assets/003-dragao.svg'
import { ReactComponent as Hidra } from '../../assets/004-hidra.svg'
import { ReactComponent as Coruja } from '../../assets/005-coruja.svg'
import { ReactComponent as Lobo } from '../../assets/006-lobo.svg'
import { ReactComponent as Gatinha } from '../../assets/007-gatinha.svg'
import { ReactComponent as Raposinha } from '../../assets/008-raposinha.svg'
import React from 'react'

class BoardService {

  getPieces = async (): Promise<BoardPiece[]> => {
    
      const boardAPI = await BoardServerService.getBoardPiecesFromAPI()

      if(boardAPI) {
        const pieces: BoardPiece[]  = boardAPI.map(e => { 
          return {
            id: e.id,
            image: this.stringToSVG(e.value, e.name),
            turned: false
          }
        })
        return [...pieces, ...pieces]
      }
      return [...this.getLocalPieces(), ...this.getLocalPieces()]
  }

  getLocalPieces = (): BoardPiece[] => {
    const className = 'piece__front'
    return [
      { id: 1, image: <Orca className={className}/>, turned: false },
      { id: 2, image: <Stegosaurus className={className}/>, turned: false },
      { id: 3, image: <Dragao className={className}/>, turned: false },
      { id: 4, image: <Hidra className={className}/>, turned: false},
      { id: 5, image: <Coruja className={className}/>, turned: false },
      { id: 6, image: <Lobo className={className}/>, turned: false },
      { id: 7, image: <Gatinha className={className}/>, turned: false },
      { id: 8, image: <Raposinha className={className}/>, turned: false }
    ]
  }

  stringToSVG = (str: string, alt: string) => {
    const buff = Buffer.from(str)
    const base64data = buff.toString('base64')

    return (
      <img 
        src={`data:image/svg+xml;utf8,${base64data}`}
        className='piece__front' 
        alt={alt} 
      />
    )
  }

}

export default new BoardService()