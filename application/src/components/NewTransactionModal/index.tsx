import * as zod from 'zod'
import * as Dialog from '@radix-ui/react-dialog';
import { zodResolver} from '@hookform/resolvers/zod';
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
import { Controller, useForm } from 'react-hook-form';

const NewTransactionFormSchema = zod.object({
    price: zod.number(),
    category: zod.string().min(1),
    description: zod.string().min(1),
    type: zod.enum(['income','outcome'])
})

type NewTransactionFormInputs =  zod.infer<typeof NewTransactionFormSchema>

export function NewTransactionModal(){

    const {
        reset,
        control,
        register,
        handleSubmit,
        formState: {isSubmitting}

    } = ( useForm<NewTransactionFormInputs>({
        resolver: zodResolver(NewTransactionFormSchema),
  
    }))

    async function handleCreateNewTransaction(data: NewTransactionFormInputs){
        await new Promise(response => setTimeout(response, 3000))
        console.log(data)
    }

    const {colors} = defaultTheme
    return(
        <Dialog.Portal>
            <Overlay/>
            <Content>
                    <Dialog.Title> Nova Transação</Dialog.Title>
                        <Close>
                            <X size={'1.5rem'}/>
                        </Close>

                        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                            <TranscionIputsArea>
                                <input 
                                    required
                                    type="text"
                                    placeholder="Descrição"
                                    {...register('description')}
                                />
                                <input 
                                    required
                                    type="number"
                                    min={1}
                                    placeholder="Preço"
                                    {...register('price',{valueAsNumber:true})}
                                />
                                <input 
                                    required
                                    type="text"
                                    placeholder="Categoria"
                                    {...register('category')}
                                />
                            </TranscionIputsArea>


                            <Controller
                                control={control}
                                name = 'type'
                                render={({field}) => {
                              
                                    return(
                                        <TransactionType 
                                            value={field.value}
                                            onValueChange={field.onChange} 
                                        >
                                            <TransactionTypeButton variant='income'value='income'>
                                                <ArrowCircleUp />
                                                <span>Entrada</span>
                                            </TransactionTypeButton>
                                            
                                            <TransactionTypeButton variant='outcome' value='outcome'>
                                                <ArrowCircleDown />
                                                <span>Saída</span>
                                            </TransactionTypeButton>
                                        </TransactionType>
                                    )
                                }}
                            />
                            <CreateNewTransaction disabled={isSubmitting} type="submit">
                                Cadastrar
                            </CreateNewTransaction>
                        </form>
            </Content>
        </Dialog.Portal>
    )
}