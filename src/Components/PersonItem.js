import React from "react";
import PropTypes from "prop-types";

import Avatar from './Avatar';
import Person from "../Model/Person";

class PersonItem extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            online: this.props.person.online
        };
    }

    render() {
        let onlineStatus = this.state.online ?'online' :'offline';

        return (
            <div className="person-item">
                <Avatar person={this.props.person} />

                <div>
                    <h4>{this.props.person.name}</h4>
                    <p
                        className={`onlineStatus ${onlineStatus}`}
                        onClick={this.handleOnlineStatusClick.bind(this)}
                    >{onlineStatus}</p>
                </div>
            </div>
        );
    }

    handleOnlineStatusClick() {
        this.setState({
            online: !this.state.online
        });
    }
}

PersonItem.propTypes = {
    person: PropTypes.instanceOf(Person)
};

export default PersonItem;