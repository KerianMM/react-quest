import React from "react";
import PropTypes from "prop-types";
import Person from "../Model/Person";

class Quote extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            quote: this.props.person.quote
        };
    }

    render() {
        if (this.state.quote !== null) {
            return (
                <p>{this.state.quote}</p>
            );
        }

        return (<p/>);
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        setTimeout(() => {
            this.setState({
                quote: this.props.person.quote
            })
        }, 500);
    }
}

Quote.propTypes = {
    person: PropTypes.instanceOf(Person).isRequired
};

export default Quote;