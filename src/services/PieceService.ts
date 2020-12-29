import superagent from 'superagent'
import { StatusCodes } from 'http-status-codes'
import RemoteBoardPieces from '../components/types/RemoteBoardPieces'

class PieceService {
    async getAllPieces(): Promise < RemoteBoardPieces[] | undefined> {
        const answer = await superagent.get('https://treinamento-reactjs-api.herokuapp.com/svg/all')

        return answer.status === StatusCodes.OK? answer.body : undefined
    }
}

export default new PieceService()