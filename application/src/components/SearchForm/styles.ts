import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    
    input{
        flex: 1;

        border-radius: 6px;
        background-color: ${ ({theme}) => theme.colors["gray-900"]};
        padding: 1rem;
        
        &::placeholder{
            color:  ${ ({theme}) => theme.colors["gray-500"]};;
        }
    }


`


export const SearchButton = styled.button`
    display:  flex;
    flex-direction: row;
    align-items: center;
    column-gap: .75rem;

    cursor: pointer;
    border-radius: 6px;
    transition: all  .4s;
    padding: 1.05rem 2rem ;
    background-color: transparent;
    border:  1px solid  ${ ({theme}) => theme.colors["green-300"]};
    color:  ${ ({theme}) => theme.colors["green-300"] };
    
    &:disabled{

        opacity: .7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        color:  ${ ({theme}) => theme.colors.white};
        background-color:  ${ ({theme}) => theme.colors["green-500"]};
        border-color: ${ ({theme}) => theme.colors["green-500"]};;
    }
    
`
