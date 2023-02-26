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
                staleTime: Infinity,
                select: ({rates, date, timestamp}) => {
                    return {rates, date, timestamp}
                },
                keepPreviousData: true
            },
            {
                queryKey: ["symbols"],
                queryFn: fetchSymbols,
                staleTime: Infinity,
                select: ({symbols}) => symbols
            }
        ]
    });
    const isLoading = [ratesData, symbolsData].some((query) => query.isLoading);
    const isError = [ratesData, symbolsData].some((query) => query.isError);

    const convertedAmount = (ratesData.data?.rates[currencyTwo] * amount).toFixed(2);

    const date = new Date(ratesData.data?.date).toLocaleDateString();
    const time = new Date(ratesData.data?.timestamp).toLocaleDateString("en-Us");

    const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : {};

    return {
        isLoading,
        isError,
        amount,
        setAmount,
        currencyOne,
        setCurrencyOne,
        currencyTwo,
        setCurrencyTwo,
        convertedAmount,
        ratesData,
        symbolsData,
        date,
        time,
        currencyList
    };
}

