import superagent from 'superagent'
import httpStatusCode from 'http-status-codes'
import BoardPieceAPI from '../../types/BoardPieceAPI'
import BoardPiece from '../../types/BoardPiece'
import APIConstants from '../../constants/APIConstants'

class BoardService {

  getAllPiecesFromServer = async (): Promise<BoardPieceAPI[] | undefined> => {
    
    const request = await superagent.get(APIConstants.GET_SVG_ALL)

    return request.status === httpStatusCode.OK ? request.body : undefined
  }

  getPiecesByQuantityFromServer = async ( quantity: number): Promise<BoardPieceAPI[] | undefined> => {
    
    const request = await superagent.post(APIConstants.GET_SVG_BY_QUANTITY).send({ quantity })

    return request.status === httpStatusCode.OK ? request.body : undefined
  }

  getPiecesByIdsFromServer = async ( ids: number[]): Promise<BoardPieceAPI[] | undefined> => {
    
    const request = await superagent.post(APIConstants.GET_SVG_BY_IDS).send({ ids })

    return request.status === httpStatusCode.OK ? request.body : undefined
  }

  doubleAndShufflePieces = (data: BoardPiece[]) => {

    const dataDeepCopy: BoardPiece[] = JSON.parse(JSON.stringify(data))

    const board = [...data, ...dataDeepCopy]
        
    return board.sort(() => Math.random() - 0.5)

  }

}

export default new BoardService()