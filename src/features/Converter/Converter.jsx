import {useCurrency} from "../common/hooks/useCurrency.js";
import {Box, Spinner, Text} from "@chakra-ui/react";
import ConverterHeader from "./components/ConverterHeader";
import ConverterOption from "./components/ConverterOption";
import ConverterInput from "./components/ConverterInput";

const Converter = () => {
    const {
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
    } = useCurrency();

    if (isError) return (
        <Text fontWeight='bold' fontSize='3xl' color='white' my='10'>
            Something has gone terribly wrong
        </Text>
    );

    if (isLoading) return (
        <Spinner
            margin='auto 0'
            size='xl'
            thickness='4px'
            speed='0.65s'
            color='purple.500'
            emptyColor='purple.200'
        />
    );
    return (
      <Box width={{base: '90vw', sm: '45vw'}} margin='0 auto'>
        <ConverterHeader />
          <ConverterOption
              symbol={symbolsData.data}
              currencyList={currencyList}
              onCurrencyChange={setCurrencyOne}
              currency={currencyOne}
          />

          <ConverterOption
              symbol={symbolsData.data}
              currencyList={currencyList}
              onCurrencyChange={setCurrencyTwo}
              currency={currencyTwo}
          />

          <ConverterInput value={amount} onAmountChange={setAmount} />
      </Box>
    )
}

export default Converter;