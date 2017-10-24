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

class Start extends Component {

    render() {

        return (
            <div>
               <Container fluid={true}>
                   <TopMenu/>
                   <Grid>

                       <Grid.Column width={1}/>
                       <Grid.Column width={3}>
                           <SideCard/>
                       </Grid.Column>
                       <Grid.Column width={8}>
                           <Segment>

                               <Feed>
                                   <Feed.Event>
                                       <Feed.Label>
                                           <Image src={bofa} />
                                       </Feed.Label>
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <Feed.User>Elliot Fu</Feed.User> added you as a friend
                                               <Feed.Date>1 Hour Ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   4 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageHelen} />
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <a>Helen Troy</a> added <a>2 new illustrations</a>
                                               <Feed.Date>4 days ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Extra images>
                                               <a><Image src={imageSmall} size='medium' /></a>
                                               <a><Image src={imageSmall} /></a>
                                           </Feed.Extra>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   1 Like
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageJenny} />
                                       <Feed.Content>
                                           <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   8 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageJoe} />
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <a>Joe Henderson</a> posted on his page
                                               <Feed.Date>3 days ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Extra text>
                                               Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                               over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                               day soon.
                                           </Feed.Extra>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   5 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageJenny} />
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                                               <Feed.Date>4 days ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Extra images>
                                               <a><Image src={imageSmall} /></a>
                                               <a><Image src={imageSmall} /></a>
                                           </Feed.Extra>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   41 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>
                               </Feed>
                           </Segment>
                           <Segment>

                               <Feed>
                                   <Feed.Event>
                                       <Feed.Label>
                                           <Image src={imageElliot} />
                                       </Feed.Label>
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <Feed.User>Elliot Fu</Feed.User> added you as a friend
                                               <Feed.Date>1 Hour Ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   4 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageHelen} />
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <a>Helen Troy</a> added <a>2 new illustrations</a>
                                               <Feed.Date>4 days ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Extra images>
                                               <a><Image src={imageSmall} size='medium' /></a>
                                               <a><Image src={imageSmall} /></a>
                                           </Feed.Extra>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   1 Like
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageJenny} />
                                       <Feed.Content>
                                           <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   8 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageJoe} />
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <a>Joe Henderson</a> posted on his page
                                               <Feed.Date>3 days ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Extra text>
                                               Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                               over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                               day soon.
                                           </Feed.Extra>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   5 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageJenny} />
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                                               <Feed.Date>4 days ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Extra images>
                                               <a><Image src={imageSmall} /></a>
                                               <a><Image src={imageSmall} /></a>
                                           </Feed.Extra>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   41 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>
                               </Feed>
                           </Segment>
                           <Segment>

                               <Feed>
                                   <Feed.Event>
                                       <Feed.Label>
                                           <Image src={imageElliot} />
                                       </Feed.Label>
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <Feed.User>Elliot Fu</Feed.User> added you as a friend
                                               <Feed.Date>1 Hour Ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   4 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageHelen} />
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <a>Helen Troy</a> added <a>2 new illustrations</a>
                                               <Feed.Date>4 days ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Extra images>
                                               <a><Image src={imageSmall} size='medium' /></a>
                                               <a><Image src={imageSmall} /></a>
                                           </Feed.Extra>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   1 Like
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageJenny} />
                                       <Feed.Content>
                                           <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   8 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageJoe} />
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <a>Joe Henderson</a> posted on his page
                                               <Feed.Date>3 days ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Extra text>
                                               Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                               over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                               day soon.
                                           </Feed.Extra>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   5 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>

                                   <Feed.Event>
                                       <Feed.Label image={imageJenny} />
                                       <Feed.Content>
                                           <Feed.Summary>
                                               <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                                               <Feed.Date>4 days ago</Feed.Date>
                                           </Feed.Summary>
                                           <Feed.Extra images>
                                               <a><Image src={imageSmall} /></a>
                                               <a><Image src={imageSmall} /></a>
                                           </Feed.Extra>
                                           <Feed.Meta>
                                               <Feed.Like>
                                                   <Icon name='like' />
                                                   41 Likes
                                               </Feed.Like>
                                           </Feed.Meta>
                                       </Feed.Content>
                                   </Feed.Event>
                               </Feed>
                           </Segment>
                       </Grid.Column>
                       <Grid.Column width={3}>
                           <Segment>
                               <Card>
                                   <Card.Content>
                                       <Card.Header>
                                           Now trending ....
                                       </Card.Header>

                                   </Card.Content>
                                   <Card.Content extra>
                                       <a>
                                           <Icon name='users' />
                                           22 Friends
                                       </a>
                                   </Card.Content>
                                   <Card.Content extra>
                                       <a>
                                           <Icon name='comment' />
                                           400 Posts
                                       </a>
                                   </Card.Content>
                                   <Card.Content extra>
                                       <a>
                                           <Icon name='alarm' />
                                           10 Alerts
                                       </a>
                                   </Card.Content>
                               </Card>
                           </Segment>
                       </Grid.Column>
                   </Grid>
                   <Grid.Column width={1}/>
               </Container>

            </div>
        )
    }
}

export default Start;