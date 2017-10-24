import React, { Component } from 'react';
import { Comment, Form, Button, TextArea } from 'semantic-ui-react';
import CustomButton from '../button';
import api from '../../api/api';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            note : ''
        }
    }


    handleInputChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.note) {
            api.postNote(this.state.note)
                .then(res => {

                })
                .catch(err => window.location = "/");
        }
    };
    
    render() {

        return (

            <Comment.Group size='medium'>
                <Form>
                    <Form.Field control={TextArea}
                                label='note'
                                placeholder='See Something, Say Something ...'
                                value=''
                                name='note'
                                onChange={this.handleInputChange}
                    />
                    <CustomButton
                        disabled={!(this.state.note)}
                        onClick={this.handleSubmit}
                        color={"teal"}
                        text={"Post"}
                    />
                </Form>
            </Comment.Group>


        )
    }
}

export default Post;