import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'


class CustomButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <Button color={this.props.color}>
                this.props.text
            </Button>

        )
    }
}

export default CustomButton;