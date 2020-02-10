import React from "react";

class PersonItem extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.avatar} alt={this.props.name}/>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

export default PersonItem;