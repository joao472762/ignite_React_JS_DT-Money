import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowCircleDown, ArrowCircleUp} from "phosphor-react";
import { defaultTheme } from "../../styles/theme";
import { 
    TransactionTypeButton,
    TranscionIputsArea,
    Overlay, Content,
    CreateNewTransaction,
    Close, 
    TransactionType
} from "./styles";



export function NewTransactionModal(){
    const {colors} = defaultTheme
    return(
        <Dialog.Portal>
            <Overlay/>
            <Content>
                    <Dialog.Title> Nova Transação</Dialog.Title>
                        <Close>
                            <X size={'1.5rem'}/>
                        </Close>

                        <form action="">
                            <TranscionIputsArea>
                                <input 
                                    required
                                    type="text"
                                    placeholder="Descrição" 
                                />
                                <input 
                                    required
                                    type="number"
                                    placeholder="Preço"
                                />
                                <input 
                                    required
                                    type="text"
                                    placeholder="Categoria" 
                                />
                            </TranscionIputsArea>


                            <TransactionType>
                                <TransactionTypeButton variant='income'value='income'>
                                    <ArrowCircleUp />
                                    <span>Entrada</span>
                                </TransactionTypeButton>
                                
                                <TransactionTypeButton variant='outcome' value='outcome'>
                                    <ArrowCircleDown />
                                    <span>Saída</span>
                                </TransactionTypeButton>
                                
                                
                            </TransactionType>
                            <CreateNewTransaction type="submit">Cadastrar</CreateNewTransaction>
                        </form>
            </Content>
        </Dialog.Portal>
    )
}