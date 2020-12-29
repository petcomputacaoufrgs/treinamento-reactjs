import React, { createContext, useContext, useEffect, useState } from 'react'
import BoardPiece from '../../../components/types/BoardPiece';
import PieceService from '../../../services/PieceService';

interface PieceContextType {
    data: Array<BoardPiece>
    loading: boolean
}

const defaulfContext: PieceContextType = {
    data: [],
    loading: true
}

const PieceContext = createContext(defaulfContext)

const PieceProvider: React.FC = ({children}) => {
    const [value, setValue] = useState(defaulfContext)

    useEffect(() => {
        const getData = async () => {
            const serverData = await PieceService.getAllPieces()

            if(serverData) {
                const newData: Array<BoardPiece> = serverData.map((data) => {
                    const buff = Buffer.from(data.value)
                    const base64data = buff.toString('base64')

                    return({
                        id: data.id,
                        image: () => <img alt={data.name} className='piece piece__front' src={`data:image/svg+xml;base64,${base64data}`} />,
                        turned: false,
                        visible: true
                    })
                })

                setValue({
                    data: [...newData, ...newData.map((data) => ({...data}))],
                    loading:false
                })
            }
        }

        getData()
    }, [])

    return (
        <PieceContext.Provider value={value}>
            {children}
        </PieceContext.Provider>
    )
}

export const usePieces = () => useContext(PieceContext)
export default PieceProvider