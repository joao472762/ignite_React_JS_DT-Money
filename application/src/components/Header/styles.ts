import styled from "styled-components";

export const HeaderContainer = styled.header` 
    padding: 2.5rem 0 7.5rem;
    background-color: ${( {theme} ) => theme.colors["gray-900"]};
`

export const HeaderContent = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1168px;
    padding: 0 1.5rem;
    margin: 0 auto;

    div{
        display: flex;  
        align-items: center;
        column-gap: 1rem;
        
        h1{
            font-size: 1.56rem;
            line-height: 160%;
            color: ${( {theme} ) => theme.colors["gray-100"]};
        }

        img{
            width: 2.5rem;
        }

    }
`

export const NewTransactionButton = styled.button`
    border-radius: 5px;
    padding: 0.75rem 1.25rem;
    font-weight: bold;
    cursor: pointer;
    color: ${ ({ theme}) => theme.colors.white};;
    background-color:  ${ ({ theme}) => theme.colors["green-500"]};
    transition:background-color .2s;

    &:hover{
        background-color:  ${ ({ theme}) => theme.colors["green-700"]}

    }
`