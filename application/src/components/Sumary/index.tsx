import { SumaryCard, SumaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { defaultTheme } from '../../styles/theme'


export function Sumary(){

    const {colors} =  defaultTheme

    return(
        <SumaryContainer >
            <SumaryCard>
                <header>
                    <span> Entradas </span>
                    <ArrowCircleUp color={colors['green-500']} size={32}/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SumaryCard>

            <SumaryCard>
                <header>
                    <span> Saídas</span>
                    <ArrowCircleDown color={colors['red-500']} size={32}/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SumaryCard>

            <SumaryCard variant='green'>
                <header>
                    <span> Total</span>
                    <CurrencyDollar color={colors.white} size={32}/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SumaryCard>

        </SumaryContainer>
    )
}