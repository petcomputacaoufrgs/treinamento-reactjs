import BoardPieceAPI from '../../types/BoardPieceAPI'
import superagent from 'superagent'
import httpStatusCode from 'http-status-codes'

class BoardServerService {

  getBoardPiecesFromAPI = async (): Promise<BoardPieceAPI[] | undefined> => {
    
    const request = await superagent.get('http://treinamento-reactjs-api.herokuapp.com/svg/all')

    return request.status === httpStatusCode.OK ? request.body : undefined
  }

}

export default new BoardServerService()