import React from "react";
import Avatar from './Avatar';

class PersonItem extends React.Component {
    render() {
        return (
            <div>
                <Avatar
                    avatar={this.props.avatar}
                    name={this.props.name} />

                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

export default PersonItem;