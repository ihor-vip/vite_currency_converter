import {useCurrency} from "../common/hooks/useCurrency.js";

const Converter = () => {
    const {amount, currencyOne, currencyTwo} = useCurrency()
    return (
        <div>
            {amount} {currencyOne} {currencyTwo}
        </div>
    )
}

export default Converter;