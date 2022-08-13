import styled, { css } from "styled-components";


interface Color  {
    variant: 'red' | 'green'
}
 
export const HomeContainer = styled.div``

export const HomeContent =  styled.div`
    max-width: 1168px;
    padding:  0 1.5rem;
    margin: 0 auto;
`

export const TransactionsContainer = styled.main`
    margin-top: 4rem;
    width: 100%;
`

export const TansactionsTable = styled.table`
    margin-top: 1.5rem;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 .5rem;
    

    td{
        background-color: ${( {theme} ) => theme.colors["gray-700"]};
        padding: 1.25rem 2rem;

        &:first-child{
            width: 40%;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
        
        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
   
    }

`

interface PriceHilightProps {
    variant: 'income' | 'outcome'
} 

export const PriceHilight = styled.span<PriceHilightProps>`
    color: ${ props => props.variant === 'income' 
           ? props.theme.colors["green-300"]
           : props.theme.colors["red-300"]
    };
`

