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

import { Link } from "react-router-dom";
import TopMenu from '../../components/topMenu'
import SideCard from '../../components/sideCard';
import image1 from '../../static/images/image.png';
import image2 from '../../static/images/paragraph.png';
import image3 from '../../static/images/media-paragraph.png';
import image4 from '../../static/images/matthew.png';
import imageSmall from '../../static/images/image-small.png';
import imageHelen from '../../static/images/helen.jpg';
import imageElliot from '../../static/images/elliot.jpg';
import imageJoe from '../../static/images/joe.jpg';
import imageJenny from '../../static/images/jenny.jpg';
import bofa from '../../static/images/bofa.png';
import api from '../../api/api';
import CustomMessage from "../../components/message/CustomMessage";
import GeneralComment from "../../components/generalComment/GeneralComment";


class Start extends Component {

    constructor(props) {
        super(props);
        this.state = {

            transactions : [],
            count : 0
        };
    }

    componentDidMount() {
        this.loadTransactions();
    }

    loadTransactions = () => {
        api.getTransactions()
            .then(res =>
                this.setState({ transactions: res.data.results, count: res.data.results.length})
            )
            .catch(err => console.log(err));
    };


    render() {

        let displayMessage;
        let transactionDisplay;
        if (this.state.count === 0) {
            displayMessage = <CustomMessage color={'red'} header={'You have no transactions to display'} />
        } else {
            let text = 'You have ' + this.state.count + ' transactions synced with Swaddle';
            displayMessage = <CustomMessage color={'green'} header={text} />;
            transactionDisplay = <Segment>
                {this.state.transactions.map(transaction => (

                    /**
                     * <Comment>
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
                     */
                            <GeneralComment key={transaction._id} image={bofa} transaction={transaction}/>
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
                           {transactionDisplay}
                       </Grid.Column>
                       <Grid.Column width={4}/>

                   </Grid>
                   <Grid.Column width={1}/>
               </Container>

            </div>
        )
    }
}

export default Start;