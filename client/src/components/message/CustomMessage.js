import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'


class CustomMessage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <Message
                color={this.props.color}
                header={this.props.header}
            />

        )
    }
}

export default CustomMessage;