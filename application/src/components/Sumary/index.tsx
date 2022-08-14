import { SumaryCard, SumaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { defaultTheme } from '../../styles/theme'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'


export function Sumary(){
    const {tranasactions} = useContext(TransactionsContext)
    const {colors} =  defaultTheme

    const sumary = tranasactions.reduce((acc, transaction) => {
        if(transaction.type === 'income'){
            acc.income += transaction.price
            acc.total  += transaction.price
        }

        else{
           acc.outcome += transaction.price
           acc.total  -= transaction.price
        }

       return acc
    },{income: 0, outcome: 0 , total: 0})
    
    function  formatPrice(price:number){
        const pirceFormated = price.toLocaleString('pt-br',{
            style: 'currency',
            currency: 'BRL'
        })

        return  pirceFormated
    }


    return(
        <SumaryContainer >
            <SumaryCard>
                <header>
                    <span> Entradas </span>
                    <ArrowCircleUp color={colors['green-500']} size={32}/>
                </header>
                <strong>{formatPrice(sumary.income)}</strong>
            </SumaryCard>

            <SumaryCard>
                <header>
                    <span> Saídas</span>
                    <ArrowCircleDown color={colors['red-500']} size={32}/>
                </header>
                <strong>{formatPrice(sumary.outcome)}</strong>
            </SumaryCard>

            <SumaryCard variant='green'>
                <header>
                    <span> Total</span>
                    <CurrencyDollar color={colors.white} size={32}/>
                </header>
                <strong>{formatPrice(sumary.total)}</strong>
            </SumaryCard>

        </SumaryContainer>
    )
}