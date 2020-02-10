import React from "react";
import PropTypes from "prop-types";

import Avatar from './Avatar';
import Person from "../Model/Person";

class PersonItem extends React.Component {
    render() {
        let onlineStatus = this.props.person.online ?'online' :'offline';

        return (
            <div className="person-item">
                <Avatar person={this.props.person} />

                <div>
                    <h4>{this.props.person.name}</h4>
                    <p className={`onlineStatus ${onlineStatus}`}>{onlineStatus}</p>
                </div>
            </div>
        );
    }
}

PersonItem.propTypes = {
    person: PropTypes.instanceOf(Person)
};

export default PersonItem;