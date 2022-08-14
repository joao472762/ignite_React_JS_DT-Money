import { createContext, ReactNode, useEffect, useState } from "react"
import { TransictionsApi } from "../../services"

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

interface TransactionsContextType {
    tranasactions: TransactionsProps[]
}


export const TransactionsContext = createContext({} as TransactionsContextType) 

export function TransactionsProvider({children} : TransactionsProviderProvider){
    const  [tranasactions, setTransactions] = useState<TransactionsProps[]>([])

    async function loadTransactions(){

        const response =  await fetch(TransictionsApi)
        const data = await  response.json()
        
        setTransactions(() => data)
    }

    useEffect(() => {
        loadTransactions()
    },[])
    
    return(
        <TransactionsContext.Provider value={{tranasactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}