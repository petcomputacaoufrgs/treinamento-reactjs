import superagent from 'superagent'
import { StatusCodes } from 'http-status-codes'

class PieceService {
    async getAllPieces(): Promise < any | undefined> {
        const answer = await superagent.get('https://treinamento-reactjs-api.herokuapp.com/svg/all')

        return answer.status === StatusCodes.OK? answer.body : undefined
    }
}

export default new PieceService()