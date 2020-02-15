import React from 'react';
import PersonItem from "../PersonItem/PersonItem";
import ContactsPropTypes from "./Contacts.prop-types";

const Contacts = props => props.contacts.map(contact => <PersonItem key={contact.id} person={contact}/>);

ContactsPropTypes(Contacts);

export default Contacts;
