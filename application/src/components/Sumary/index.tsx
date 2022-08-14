import { defaultTheme } from '../../styles/theme'
import { useSumary } from '../../hooks/useSumary'
import { SumaryCard, SumaryContainer } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

    
export function Sumary(){
    const {colors} =  defaultTheme
    const sumary = useSumary()
    
    return(
        <SumaryContainer >
            <SumaryCard>
                <header>
                    <span> Entradas </span>
                    <ArrowCircleUp color={colors['green-500']} size={32}/>
                </header>
                <strong>{priceFormatter.format(sumary.income)}</strong>
            </SumaryCard>

            <SumaryCard>
                <header>
                    <span> Saídas</span>
                    <ArrowCircleDown color={colors['red-500']} size={32}/>
                </header>
                <strong>{priceFormatter.format(sumary.outcome)}</strong>
            </SumaryCard>

            <SumaryCard variant='green'>
                <header>
                    <span> Total</span>
                    <CurrencyDollar color={colors.white} size={32}/>
                </header>
                <strong>{priceFormatter.format(sumary.total)}</strong>
            </SumaryCard>

        </SumaryContainer>
    )
}