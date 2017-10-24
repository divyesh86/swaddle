import React, { Component } from 'react'
import GeneralComment from "./GeneralComment";


class CommentList extends Component {

    constructor(props) {
        super(props);
    }

    render() {


        const commentList = this.props.comments;
        return (

            <Comment.Group threaded>
                if(commentList){
                    commentList.map(transaction => {
                        <GeneralComment transaction={transaction}/>
                    })
                }

            </Comment.Group>
        )
    }
}

export default CommentList;