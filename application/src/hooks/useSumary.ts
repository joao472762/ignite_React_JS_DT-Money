import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSumary(){
    const {tranasactions} = useContext(TransactionsContext)

    const sumary = tranasactions.reduce(
        (acc, tranasaction) => { 
            if(tranasaction.type === 'income'){
                acc.income += tranasaction.price
                acc.total += tranasaction.price
            }

            else{
                acc.outcome += tranasaction.price
                acc.total -= tranasaction.price
            }

            return acc
        },
        {
            income: 0, 
            outcome: 0, 
            total: 0
        }
    )

    return sumary
}