import {Box, Text} from "@chakra-ui/react";

const ConverterHeader = () => {
    return (
        <Box marginTop='20' marginBottom='10' textAlign="center" color='white'>
            <Text fontWeight='bold' fontSize='3xl'>
                Currency Converter & Exchange Rates
            </Text>
            <Text fontWeight='light' fontSize='2xl'>
                Up to date FX rates
            </Text>
        </Box>
    )
}

export default ConverterHeader;