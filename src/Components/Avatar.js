import React from "react";
import PropTypes from "prop-types";
import Person from "../Model/Person";

class Avatar extends React.Component {
    render() {
        return (
            <img className="avatar"
                src={this.props.person.avatar}
                alt={this.props.person.name} />
        );
    }
}

Avatar.propTypes = {
    person: PropTypes.instanceOf(Person).isRequired
};

export default Avatar;