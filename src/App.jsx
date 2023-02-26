import Converter from "./features/Converter";
import {Flex} from "@chakra-ui/react";

function App() {
    return (
        <>
            <Flex bgGradient='linear(to-t, #ae085c, #2e0656)'>
                <Converter />
            </Flex>
        </>
    )
}

export default App
