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

import TopMenu from '../../components/topMenu'
import bofa from '../../static/images/bofa.png';
import plaidService from '../../services/plaid/PlaidService';

class Accounts extends Component {


    handleSubmit = (event) => {

        plaidService.addAccount
            .then(res => {
                console.log(res);
            })
    };

    render() {

        return (
            <div>
                <Container fluid={true}>
                    <TopMenu/>
                    <Grid>
                        <Grid.Column width={6}/>
                        <Grid.Column width={4}>
                            <Segment>
                                <Header as='h2' icon>
                                    <Icon name='university' />
                                    <Header.Subheader>
                                        Add a bank account
                                    </Header.Subheader>
                                    <Header.Subheader>
                                        <CustomButton
                                            color={"blue"}
                                            text={"Add an account"}
                                            onChange={this.handleSubmit}
                                        />
                                    </Header.Subheader>

                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={6}/>
                    </Grid>
                    <Grid>
                        <Grid.Column width={1}/>
                        <Grid.Column width={3}>

                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment.Group>
                                <Segment  padded  color="olive">
                                    <Header as='h2' icon>
                                    <Icon name='settings' />
                                    Account Settings
                                    <Header.Subheader>
                                        Manage your account settings and set e-mail preferences.
                                    </Header.Subheader>
                                    </Header>
                                </Segment>
                                <Segment  padded  color="olive">
                                    <Header as='h2' icon>
                                        <Icon name='settings' />
                                        Account Settings
                                        <Header.Subheader>
                                            Manage your account settings and set e-mail preferences.
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                                <Segment  padded color="olive" >
                                    <Header as='h2' icon>
                                        <Icon name='settings' />
                                        Account Settings
                                        <Header.Subheader>
                                            Manage your account settings and set e-mail preferences.
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Segment.Group>
                        </Grid.Column>
                    </Grid>
                    <Grid.Column width={1}/>
                </Container>

            </div>
        )
    }
}

export default Accounts;