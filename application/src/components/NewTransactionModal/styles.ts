import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';


export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    
    inset: 0;
    width: 100vw;
    height: 100h;
    background-color: rgba(0,0,0,.75);
`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: ${( {theme} ) => theme.colors["gray-800"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    h2{
        color: ${( {theme} ) => theme.colors["gray-100"]};
    }

    form{
        margin-top: 2rem;

    }
` 
export const Close = styled(Dialog.Close)`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    cursor: pointer;
    line-height: 0;
    background-color: transparent;
    color: ${( {theme} ) => theme.colors["gray-500"]};
`
export const TranscionIputsArea = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    input{
        border-radius: 6px;
        padding: 1rem;
        background-color: ${( {theme} ) => theme.colors["gray-900"]};

        &::placeholder{
            color:  ${( {theme} ) => theme.colors["gray-500"]};
        }
    }

`

export const CreateNewTransaction = styled.button`
    margin-top: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding :1rem ;
    cursor: pointer;
    font-weight: bold;
    border-radius: 6px;
    background-color: ${( {theme} ) => theme.colors["green-500"]};
    transition: .2s background-color;

    &:disabled{
        cursor: not-allowed;
        opacity: .7;
    }

    &:not(:disabled):hover{
        background-color: ${( {theme} ) => theme.colors["green-700"]};
    }

`

export const TransactionType = styled(RadioGroup.Root)`
    display:  grid;
    column-gap: 1rem;

    margin-top: 1.5rem;
    grid-template-columns: repeat(2, 1fr);

    
    
`
interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome'
}
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    display:  flex;
    align-items: center;
    justify-content: center;
    column-gap: .5rem;

    height: 3.62rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color .2s;
    background-color: ${ ({theme}) => theme.colors["gray-700"]};

    &[data-state='unchecked']:hover{
        background-color: ${( {theme} ) => theme.colors["gray-600"]};
    }

    &[data-state='checked']{
        color: ${( {theme} ) => theme.colors.white};
        background-color: ${props => props.variant === 'income'
            ?(props.theme.colors["green-500"])
            :(props.theme.colors["red-500"])
        }; 

        svg{
            color: ${( {theme} ) => theme.colors.white}
        }
    }
    
   
    svg{
        font-size: 1.5rem;
        color: ${props => props.variant === 'income'
            ?(props.theme.colors["green-500"])
            :(props.theme.colors["red-500"])
        };
    }
`
