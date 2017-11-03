import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'


class SideComment extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <Comment.Group size='small'>
                <Comment>
                    <Comment.Avatar src={this.props.image} />
                    <Comment.Content>
                        <Comment.Author as='a'>{this.props.account}</Comment.Author>
                        <Comment.Metadata>
                           {this.props.time}
                        </Comment.Metadata>
                        <Comment.Text>{this.props.amount}</Comment.Text>
                    </Comment.Content>
                </Comment>
            </Comment.Group>


        )
    }
}

export default SideComment;