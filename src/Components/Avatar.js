import React from "react";

class Avatar extends React.Component {
    render() {
        return (
                <img className="avatar"
                    src={this.props.avatar}
                    alt={this.props.name}/>
        );
    }
}

export default Avatar;