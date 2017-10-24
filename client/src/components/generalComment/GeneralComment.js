import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'


class GeneralComment extends Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (

            <Comment>
                <Comment.Avatar as='a' src={this.props.transaction.image} />
                <Comment.Content>
                    <Comment.Author as='a'>{this.props.transaction.user}</Comment.Author>
                    <Comment.Metadata>
                        <span>{this.props.transaction.timeStamp}</span>
                    </Comment.Metadata>
                    <Comment.Text>{this.props.transaction.amount}</Comment.Text>
                    <Comment.Text>{this.props.transaction.description}</Comment.Text>
                    if({this.props.transaction.location}){
                        <Comment.Text>{this.props.transaction.location}</Comment.Text>
                    }

                </Comment.Content>
            </Comment>



        )
    }
}

export default GeneralComment;