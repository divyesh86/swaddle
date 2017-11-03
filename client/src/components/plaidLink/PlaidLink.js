import React, { Component } from 'react';
import api from '../../api/api';
import config from '../../config/config';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
    Placeholder,
    Sticky,
    Rail,
    Card,
    Feed,
    Table,
    Comment
} from 'semantic-ui-react';

let PlaidReactLink = require('react-plaid-link');


class PlaidLink extends Component {




    handleOnSuccess = (token) => {
        api.insertAccounts(token)
            .then(res => {

                console.log(res);
                this.props.callBackFromParent(res);

            })
            .catch(err => console.log(err));

    };



    render() {

        return (
            <PlaidReactLink
                clientName="Swaddle"
                env={config.PLAID_ENV}
                publicKey={config.PLAID_PUBLIC_KEY}
                product="auth"
                apiVersion='v2'
                selectAccount={false}
                onSuccess={this.handleOnSuccess}
            />

        )
    }
}

export default PlaidLink;