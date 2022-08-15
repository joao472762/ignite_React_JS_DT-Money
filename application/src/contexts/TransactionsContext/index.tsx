import { createContext } from "use-context-selector"
import {  ReactNode, useCallback, useEffect, useState } from "react"

import { api } from "../../lib/axios"

interface TransactionsProps {
    id: number,
    description: string,
    type: 'income' | 'outcome'
    category: string ,
    price: number,
    createdAt: string
}

interface TransactionsProviderProvider {
    children: ReactNode
}

interface CreateTransactionInput {
    category: string,
    description: string,
    price: number
    type: 'income' | 'outcome',
}

interface TransactionsContextType {
    tranasactions: TransactionsProps[],
    featchTransactions: (query?: string) => Promise<void>,
    createTransactions: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType) 

export function TransactionsProvider({children} : TransactionsProviderProvider){

    const  [tranasactions, setTransactions] = useState<TransactionsProps[]>([])

    const featchTransactions = useCallback(async (query?: string) => {
        const response  = await api.get('',{
            params:{
                _sort: 'createdAt',
                _order: 'desc',
                q: query
            }
        })
        setTransactions(() => response.data)
    },[])

    
    const createTransactions = useCallback( async (data: CreateTransactionInput) => {
        const {category,description,price,type} = data
        
        const response = await api.post('',{
            category,
            description,
            price,
            type,
            createdAt: new Date()
        })
            
        setTransactions(state => [response.data, ...state])

    }, [])
    
    useEffect(() => {
        featchTransactions()
    },[featchTransactions])

    
    return(
        <TransactionsContext.Provider value={{
            tranasactions,
            createTransactions,
            featchTransactions,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}