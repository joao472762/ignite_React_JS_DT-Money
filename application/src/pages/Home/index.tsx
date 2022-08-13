import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Sumary } from "../../components/Sumary";
import {  HomeContent, PriceHilight,TransactionsContainer,TansactionsTable} from "./styles";

export function Home(){
    const  [tranasactions, setTransactions] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
        .then(response => response.json())
        .then(data => setTransactions(data))
  
    },[])


    


    return(
        <div>
            <Header/>
            <HomeContent>
                <Sumary/>
                <TransactionsContainer>
                    <SearchForm/>                
                    <TansactionsTable>
                        <tbody>
                            <tr>
                                <td>desenvolivmento de site</td>
                                <td><PriceHilight variant="income">R$ 12.000,00</PriceHilight></td>
                                <td>Venda</td>
                                <td>13/04/2022</td>
                            </tr>
                            
                            <tr>
                                <td>cineminha com a gata</td>
                                <td><PriceHilight variant="outcome">R$ -300,00</PriceHilight></td>
                                <td>Venda</td>
                                <td>13/04/2022</td>
                            </tr>
                        </tbody>
                    </TansactionsTable>
                </TransactionsContainer>
            </HomeContent>
        </div>
    )
}