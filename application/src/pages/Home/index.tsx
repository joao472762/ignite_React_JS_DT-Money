import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Sumary } from "../../components/Sumary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import {  HomeContent, PriceHilight,TransactionsContainer,TansactionsTable} from "./styles";

export function Home(){
   const tranasactions = useContextSelector(TransactionsContext, (context) => {
    return context.tranasactions
   })
  
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
                                            {tranasaction.type === 'outcome' && '- '}
                                            {priceFormatter.format(tranasaction.price)}
                                        </PriceHilight>
                                    </td>
                                    <td>{tranasaction.category}</td>
                                    <td>{dateFormatter.format(new Date(tranasaction.createdAt))}</td>
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