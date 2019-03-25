import React from 'react';
import { Avatar, Menu, Layout } from 'antd';

import Logo from '../../images/Logo.png';

const { Item } = Menu;
const { Header } = Layout;

class PageHeader extends React.Component {
  render() {
      return (
          <Header>
              <Menu
                  mode="horizontal"
                  theme="dark"
              >
                    <Item key="logo">
                        <Avatar src={Logo} size="large" shape="regular"/>
                    </Item>
                    <Item key="sign in"> Sign in </Item>
                    <Item key="map View"> Map View </Item>
                    <Item key="home"> Home </Item>
              </Menu>
          </Header>
      );
  }
}

export default PageHeader;
