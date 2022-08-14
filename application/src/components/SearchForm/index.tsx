import { SearchFormContainer,SearchButton} from "./styles";
import {MagnifyingGlass} from 'phosphor-react'
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'

const SearchFormSchema = zod.object({
    query: zod.string().min(1)
})

type SearchFormSchemaInputs = zod.infer<typeof SearchFormSchema>

export function SearchForm(){

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

    function handleSearchTransactions(data: SearchFormSchemaInputs){
        console.log(data.query)
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