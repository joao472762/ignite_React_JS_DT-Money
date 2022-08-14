import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Sumary } from "../../components/Sumary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import {  HomeContent, PriceHilight,TransactionsContainer,TansactionsTable} from "./styles";

export function Home(){
   const {tranasactions} = useContext(TransactionsContext)
  
    return(
        <div>
            
            <Header/>

            <HomeContent>
                <Sumary/>
                <TransactionsContainer>
                    <SearchForm/>                
                    <TansactionsTable>
                        <tbody>
                        {
                            tranasactions.map(tranasaction => (
                                <tr key={tranasaction.id}>
                                    <td>{tranasaction.description}</td>
                                    <td>
                                        <PriceHilight variant={tranasaction.type}>
                                            {tranasaction.price.toLocaleString('pt-br',{
                                                style: 'currency',
                                                currency: 'BRL'
                                            })}
                                        </PriceHilight>
                                    </td>
                                    <td>{tranasaction.category}</td>
                                    <td>13/04/2022</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </TansactionsTable>
                </TransactionsContainer>
            </HomeContent>
        </div>
    )
}