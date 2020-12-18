import superagent from 'superagent'
import httpStatusCode from 'http-status-codes'
import BoardPieceAPI from '../../types/BoardPieceAPI'

class BoardService {

  getPieces = async (): Promise<BoardPieceAPI[] | undefined> => {
    
    const request = await superagent.get('http://treinamento-reactjs-api.herokuapp.com/svg/all')

    return request.status === httpStatusCode.OK ? request.body : undefined
  }

}

export default new BoardService()