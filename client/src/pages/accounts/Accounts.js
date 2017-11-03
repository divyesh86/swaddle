import React, { Component } from 'react'
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
    Feed
} from 'semantic-ui-react'
import _ from 'lodash'
import CustomButton from '../../components/button/CustomButton';
import PlaidLink from '../../components/plaidLink';
import CustomMessge from '../../components/message/';

import TopMenu from '../../components/topMenu'
import bofa from '../../static/images/bofa.png';
import api from '../../api/api';
import CustomMessage from "../../components/message/CustomMessage";

class Accounts extends Component {

    constructor(props) {
        super(props);
        this.state = {

            accounts : [],
            message: '',
            count : 0

        };
    }

    componentDidMount() {
        this.loadAccounts();
    }

    loadAccounts = () => {
        api.getAccounts()
            .then(res =>
                this.setState({ accounts: res.data, count: res.data.length})
            )
            .catch(err => console.log(err));
    };

    callBackFromPlaid = (data) => {
        console.log(data.data);

        console.log("accounts added >> "+data.data.accountsAdded);

        if(data.data.accountsAdded > 0){
            this.setState({ count: data.data.accountsAdded});
            console.log(this.state.count);
            this.loadAccounts();
        }

    };


    render() {

        let displayMessage;
        let accountDisplay;
        if (this.state.count === 0) {
            displayMessage = <CustomMessage color={'red'} header={'Please add an account'} />
        } else {
            let text = 'You have ' + this.state.count + ' accounts synced with Swaddle';
            displayMessage = <CustomMessage color={'green'} header={text} />;
            accountDisplay = <Segment>
                {this.state.accounts.map(account => (

                    <Segment padded key={account._id} >

                        <Header as='h2'>
                            {account.bankName}
                            <Header.Subheader>
                                {account.accountName}
                            </Header.Subheader>
                            <Header.Subheader>
                                Account Number ending in : {account.accountNumber}
                            </Header.Subheader>
                            <Header.Subheader>
                                Account Type : {account.accountType}
                            </Header.Subheader>
                            <Header.Subheader>
                                Available Balance: {account.availableBalance}
                            </Header.Subheader>
                            <Header.Subheader>
                                Current Balance: {account.currentBalance}
                            </Header.Subheader>
                        </Header>
                    </Segment>
                ))}

            </Segment>

        }
        return (
            <div>
                <Container fluid={true}>
                    <TopMenu/>
                    <Grid>
                        <Grid.Column width={4}/>
                        <Grid.Column width={8}>
                            <Segment>
                                <Header as='h2' icon>
                                    <Icon name='university' />
                                    <Header.Subheader>
                                        Add a bank account
                                    </Header.Subheader>
                                    <Header.Subheader>
                                        <PlaidLink callBackFromParent = {this.callBackFromPlaid}/>
                                    </Header.Subheader>

                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={4}/>
                    </Grid>
                    <Grid>
                        <Grid.Column width={4}/>
                        <Grid.Column width={8}>

                            {displayMessage}
                            {accountDisplay}


                        </Grid.Column>
                    </Grid>
                    <Grid.Column width={4}/>
                </Container>

            </div>
        )
    }
}

export default Accounts;