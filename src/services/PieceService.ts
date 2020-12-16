import superagent from 'superagent'
import { StatusCodes } from 'http-status-codes'
import RemoteBoardPieces from '../components/types/RemoteBoardPieces'

class PieceService {
    async getAllPieces(): Promise < RemoteBoardPieces[] | undefined> {
        const answer = await superagent.get('https://treinamento-reactjs-api.herokuapp.com/svg/all')

        if(answer.status === StatusCodes.OK) {
            return answer.body
        }
    }
}

export default new PieceService()