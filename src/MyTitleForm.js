import React, { Component } from "react";

class MyTitleForm extends Component {
    constructor(props) {
        super(props);

        this.defaultTitle = "Awesome Title";
        this.state = {
            title: this.defaultTitle
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <label htmlFor="title">Title :</label>
                <input id="title"
                       type="text"
                       value={this.state.title}
                       onFocus={this.handleOnFocus}
                       onChange={this.handleOnChange}
                />
            </div>
        );
    }

    handleOnChange = (event) => {
        let title = event.target.value.replace(/\*/g, '');

        this.setState({
            title: title
        });
    };

    handleOnFocus = () => {
        if (this.state.title === this.defaultTitle) {
            this.setState({title: ''});
        }
    };
}

export default MyTitleForm;