import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PersonItem from "./PersonItem";

class Contacts extends Component {
    render() {
        return this.props.contacts.map(contact => <PersonItem key={contact.id} person={contact}/>);
    }
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired
};

export default Contacts;
