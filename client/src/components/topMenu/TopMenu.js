import React, { Component } from 'react'
import { Menu, Segment, Icon, Sidebar, Container, Input, Sticky } from 'semantic-ui-react';
import { Link } from "react-router-dom";



class TopMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'home',
        };
    }

    handleItemClick = (e, { name }) => {
        e.preventDefault();
        this.setState({ activeItem: name });
    };

    render() {

        const { activeItem } = this.state;

        return (


             <Menu inverted>
                 <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                    <Icon name='home'/>
                    Home
                 </Menu.Item>
                 <Menu.Item name='alerts' active={activeItem === 'alerts'} onClick={this.handleItemClick}>
                    <Icon name='alarm' />
                    Alerts
                 </Menu.Item>
                 <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}>
                    <Icon name='world' />
                    Community
                 </Menu.Item>
                 <Menu.Item as={Link} to='/accounts' name='accounts' active={activeItem === 'accounts'} onClick={this.handleItemClick}>
                     <Icon name='university' />
                     Accounts
                 </Menu.Item>

                 <Menu.Menu position='right'>
                     <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
                         <Input  placeholder='Search...' icon='search' iconPosition='left'/>
                     </Menu.Item>
                     <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}>
                         <Icon name='sign out' />
                         Logout
                     </Menu.Item>
                     <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick}>
                         <Icon name='setting' />
                         Settings
                     </Menu.Item>
                 </Menu.Menu>

             </Menu>




        )
    }
}

export default TopMenu;