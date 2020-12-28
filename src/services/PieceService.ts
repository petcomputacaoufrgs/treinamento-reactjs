import superagent from 'superagent'
import { StatusCodes } from 'http-status-codes'

class PieceService {
    async getAllPieces(): Promise<any | undefined> {
        const resposta = await superagent.get('https://treinamento-reactjs-api.herokuapp.com/svg/all')
        if (resposta.status === StatusCodes.OK) {
            return resposta.body
        }
    }
}

export default new PieceService()
