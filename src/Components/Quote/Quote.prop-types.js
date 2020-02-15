import PropTypes from "prop-types";
import Person from "../../Model/Person";

const QuotePropTypes = Quote => {
    Quote.propTypes = {
        person: PropTypes.instanceOf(Person).isRequired
    };
};

export default QuotePropTypes;