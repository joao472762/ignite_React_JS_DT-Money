import { SearchFormContainer,SearchButton} from "./styles";
import {MagnifyingGlass} from 'phosphor-react'

export function SearchForm(){
    return(
        <SearchFormContainer>
            <input 
                type="text" 
                placeholder="Busque uma transação" 
            />
            
            <SearchButton>
                <MagnifyingGlass/>
                <span>Buscar</span>
            </SearchButton>
        </SearchFormContainer>
    )
}