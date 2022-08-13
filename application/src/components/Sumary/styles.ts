import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/theme";

const {colors} = defaultTheme

interface SumaryBackground {
    variant?: 'green'
}
export const SumaryContainer = styled.section`
    display:  grid;
    margin-top: -5rem;
    column-gap: 2rem;
    grid-template-columns: repeat(3,1fr);
`

export const SumaryCard = styled.div<SumaryBackground>`
    display:  flex;
    flex-direction: column;
    justify-content: center;

    height: 8.56rem;
    border-radius: 6px;
    padding: 0 1.5rem 0 2rem;
    background-color: ${ props => props.theme.colors["gray-600"]};
    ${props => props.variant === 'green' && css`
        background-color: ${props.theme.colors["green-700"]};
    `}

    header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        margin-bottom: 12px
    }

    strong{
        font-size: 2rem;
        color: ${( {theme} ) => theme.colors["gray-100"]};
    }
`