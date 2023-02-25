import {useState} from "react";
import {useQueries} from "@tanstack/react-query";
import {fetchRates, fetchSymbols} from "../../Converter/api/fetchData.js";

export const useCurrency = () => {
    const [amount, setAmount] = useState(25)
    const [currencyOne, setCurrencyOne] = useState('GBP')
    const [currencyTwo, setCurrencyTwo] = useState('EUR')

    const [ratesData, symbolsData] = useQueries({
        queries: [
            {
                queryKey: ["rates", currencyOne],
                queryFn: () => fetchRates(currencyOne),
                staleTime: Infinity

            },
            {
                queryKey: ["symbols"],
                queryFn: () => fetchSymbols,
                staleTime: Infinity
            }
        ]
    });

    return {amount, currencyOne, currencyTwo}

}

