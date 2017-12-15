import React, { Component } from 'react';
import { Comment, Card, Image, Icon, Segment} from 'semantic-ui-react';
let moment = require('moment');
let numeral = require('numeral');
let randomInt = require('random-int');



class GeneralComment extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let displayAddress;
        let displayCity;
        let displayColor = "green";
        let risk = "Low";
        let userCount = randomInt(6000, 20000);
        let issues = randomInt(200, 500);
        let issueMessage;
        let recommendation;
        if(this.props.transaction.address){
            displayAddress = <Card.Content extra>
                {this.props.transaction.address}
            </Card.Content>;

            issueMessage =
                <Card.Content extra>
                    {"No issues have been reported with this type of transaction"};
                </Card.Content>;

            recommendation =
                <Card.Content extra>
                    {"Safe to use your card"}
                </Card.Content>;
        }
        if(this.props.transaction.city){
            displayCity = <Card.Content extra>
                {this.props.transaction.city}
            </Card.Content>;
            displayColor = "red";
            risk = "High";

            issueMessage =
                <Card.Content extra>
                    {"Note: " + userCount+ " swaddlers have reported " + issues + " issues from this location in the last month"}
                </Card.Content>;
            recommendation =
                <Card.Content extra>
                    {"Recommendation: Use Cash"}
                </Card.Content>;

        }

        return (

            /**
             * amount: transaction.amount,
             name: transaction.name,
             transactionId: transaction.transaction_id,
             accountId: transaction.account_id,
             pending: transaction.pending,
             date: transaction.date,
             city: transaction.location.city,
             address: transaction.location.address,
             share: false
             */



        <Card fluid={true} color={displayColor}>
            <Card.Content>
                <Image floated='right' size='mini' src={this.props.image} />
                <Card.Header>
                    ${numeral(this.props.transaction.amount).format('0.00')}
                </Card.Header>

                <Card.Meta>
                    Issue? Report <a href="https://www.bankofamerica.com/privacy/resolve-identity-theft.go"><u>here</u></a>
                </Card.Meta>
                <Card.Meta>
                    Fraud Risk Level : <b>{risk}</b>
                    <Icon name="external share"/>
                </Card.Meta>
                <Card.Meta>
                    Date: <b>{moment(this.props.transaction.date).format('LL')}</b>
                </Card.Meta>


                <Card.Description>
                    {this.props.transaction.name}
                </Card.Description>
            </Card.Content>
            {displayAddress}
            {displayCity}
            {issueMessage}
            {recommendation}


        </Card>





        )
    }
}

export default GeneralComment;