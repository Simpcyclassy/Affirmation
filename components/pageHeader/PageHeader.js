import React from 'react';
import { Avatar, Menu, Layout } from 'antd';
// import './styles.css';

import Logo from '../../images/Logo.png';

const { Item } = Menu;
const { Header } = Layout;
const MenuItemGroup = Menu.ItemGroup;

let headerStyles = {
    position: "fixed",
    width: "100%",
};
let headerStyles1 = {
    float: "left",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
};
let headerStyles2 = {
    float: "right",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
};
let headerStyles3 = {
    width: "50%",
    height: "20%",
};


class PageHeader extends React.Component {
  render() {
      return (
          <Header style={headerStyles}>
              <Menu
                  mode="horizontal"
                  theme="dark"
                  style={headerStyles1}
              >
                    <Item key="logo">
                        <Avatar style={headerStyles3} src={Logo} size="large" shape="regular"/>
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
