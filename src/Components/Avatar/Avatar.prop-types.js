import PropTypes from "prop-types";
import Person from "../../Model/Person";

const AvatarPropTypes = Avatar => {
    Avatar.propTypes = {
        person: PropTypes.instanceOf(Person).isRequired
    };
};

export default AvatarPropTypes;