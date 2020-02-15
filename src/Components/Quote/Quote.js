import React, {useEffect, useState} from "react";
import QuotePropTypes from "./Quote.prop-types";

const Quote = props => {
    const [quote, setQuote] = useState(props.person.quote);

    useEffect(() => {
        function handleQuoteChange() {
            setTimeout(() => {
                if (props.person.quote === null) {
                    handleQuoteChange();
                } else {
                    setQuote(props.person.quote);
                }
            }, 10);
        }

        handleQuoteChange();
    });

    return (quote !== null)
        ? <p>{quote}</p>
        : <p/>;
};

QuotePropTypes(Quote);

export default Quote;