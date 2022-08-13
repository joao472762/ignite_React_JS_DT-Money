import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import LogoImage  from '../../assets/IgniteLogo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header(){

    return(
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <img src={LogoImage}/>
                    <h1>DT Money</h1>
                </div>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton> Nova Transação </NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal/>

                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
}