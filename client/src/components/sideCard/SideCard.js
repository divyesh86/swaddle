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
    Feed,
    Table,
    Comment
} from 'semantic-ui-react'
import _ from 'lodash'

import image4 from '../../static/images/matthew.png';
import bofa from '../../static/images/bofa.png';
import SideComment from '../sideComment';


class SideCard extends Component {

    render() {

        return (
            <Card>
                <Image src={image4} />

                <Card.Content>
                    <Card.Header>
                       Divyesh Motiwalla
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <SideComment image={bofa} account={"8544"} time={"Today at 1:58 pm"} amount={"$500"}/>

                </Card.Content>
                <Card.Content extra>
                    <SideComment image={bofa} account={"0534"} time={"Today at 2:58 pm"} amount={"$100"}/>


                </Card.Content>
                <Card.Content extra>
                    <SideComment image={bofa} account={"0144"} time={"Yesterday at 12:55 pm"} amount={"$501"}/>
                </Card.Content>
            </Card>
        )
    }
}

export default SideCard;