import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSumary(){
    const tranasactions = useContextSelector(TransactionsContext, (context) => {
        return context.tranasactions
    })

    const sumary = useMemo(() => {
        return tranasactions.reduce(
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
    },[tranasactions])

    return sumary
}