import PropTypes from "prop-types";
import Person from "../../Model/Person";

const PersonItemPropTypes = PersonItem => {
    PersonItem.propTypes = {
        person: PropTypes.instanceOf(Person).isRequired
    };
};

export default PersonItemPropTypes;