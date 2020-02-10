import React from "react";
import Avatar from './Avatar';
import avatar from "../datas/avatar";
import name from "../datas/name";

class PersonItem extends React.Component {
    render() {
        return (
            <div>
                <Avatar
                    avatar={avatar}
                    name={name} />

                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

export default PersonItem;