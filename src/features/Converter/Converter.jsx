import {useCurrency} from "../common/hooks/useCurrency.js";
import {Box, Grid, GridItem, Spinner, Text} from "@chakra-ui/react";
import ConverterHeader from "./components/ConverterHeader";
import ConverterOption from "./components/ConverterOption";
import ConverterInput from "./components/ConverterInput";
import ConverterDisplay from "./components/ConverterDisplay";
import {RepeatIcon} from "@chakra-ui/icons";

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
          <Grid
              templateColumns='repeat(5, 1fr)'
              templateRows='repeat(2, 1fr)'
              padding={{base: '6', sm: '10'}}
              gap='1rem'
              backgroundColor='white'
              borderRadius='lg'
          >
              <GridItem
                  colSpan={{base: 5, sm: 2}}
                  justifySelf='center'
                  alignSelf='center'
              >
                  <ConverterOption
                      symbol={symbolsData.data}
                      currencyList={currencyList}
                      onCurrencyChange={setCurrencyOne}
                      currency={currencyOne}
                  />
              </GridItem>

              <GridItem
                  display={{base: 'none', sm: 'block'}}
                  colSpan={1}
                  justifySelf='center'
                  alignSelf='center'
              >
                    <RepeatIcon boxSize='2rem' color='purple.300' />
              </GridItem>

              <GridItem
                  colSpan={{base: 5, sm: 2}}
                  justifySelf='center'
                  alignSelf='center'
              >
                  <ConverterOption
                      symbol={symbolsData.data}
                      currencyList={currencyList}
                      onCurrencyChange={setCurrencyTwo}
                      currency={currencyTwo}
                  />
              </GridItem>

              <GridItem colSpan={2}>
                  <ConverterInput value={amount} onAmountChange={setAmount} />
              </GridItem>

              <GridItem colSpan={3} justifySelf='right' alignSelf='right'>
                  <ConverterDisplay
                      amount={amount}
                      currencyOne={currencyOne}
                      currencyTwo={currencyTwo}
                      convertedAmount={convertedAmount}
                      date={date}
                      time={time}
                  />
              </GridItem>
          </Grid>
      </Box>
    )
}

export default Converter;