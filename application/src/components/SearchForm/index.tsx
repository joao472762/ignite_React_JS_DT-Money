import * as zod from 'zod'
import { useForm } from "react-hook-form";
import {MagnifyingGlass} from 'phosphor-react'
import { useContextSelector } from 'use-context-selector';
import {zodResolver} from '@hookform/resolvers/zod'
import { SearchFormContainer,SearchButton} from "./styles";
import { TransactionsContext } from '../../contexts/TransactionsContext';

const SearchFormSchema = zod.object({
    query: zod.string()
})

type SearchFormSchemaInputs = zod.infer<typeof SearchFormSchema>

export function SearchForm(){
    const featchTransactions = useContextSelector(TransactionsContext, context => {
        return context.featchTransactions
    })

    const {
        reset,
        register,
        handleSubmit,
        formState: {isSubmitting},

    } = (useForm<SearchFormSchemaInputs>({
        resolver: zodResolver(SearchFormSchema),
        defaultValues:{
            
        }
    }))

    async function handleSearchTransactions(data: SearchFormSchemaInputs){
        await featchTransactions(data.query)
        reset()
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text"
                {...register('query')} 
                placeholder="Busque uma transação" 
            />
            
            <SearchButton disabled={isSubmitting}>
                <MagnifyingGlass/>
                <span>Buscar</span>
            </SearchButton>
        </SearchFormContainer>
    )
}