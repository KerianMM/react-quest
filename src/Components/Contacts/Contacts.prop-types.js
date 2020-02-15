import PropTypes from "prop-types";

const ContactsPropTypes = Contacts => {
    Contacts.propTypes = {
        contacts: PropTypes.array.isRequired
    };
};

export default ContactsPropTypes;