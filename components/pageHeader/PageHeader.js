import React from 'react';
import { Avatar, Menu, Layout } from 'antd';

const { Item } = Menu;
const { Header } = Layout;

class PageHeader extends React.Component {
  render() {
      return (
          <Header className="navigation-bar">
              <Menu
                  mode="horizontal"
                  theme="dark"
                  className="nav-menu"
              >
                  <Avatar className="avatar" src="/Logo.png" size="large" shape="regular"/>
                  <Item key="sign in"> Sign in </Item>
                  <Item key="map View"> Map View </Item>
                  <Item key="home"> Home </Item>
              </Menu>
              <style jsx>{`
                  .avatar {
                    //   float: left;
                    //   position: relative;
                    //   top: 50%;
                    //   transform: translateY(-50%);
                    width: 120px;
                    height: 31px;
                    background: rgba(255,255,255,.2);
                    margin: 16px 24px 16px 0;
                    float: right;
                  }
                  .navigation-bar {
                    position: fixed;
                    width: 100%;
                    z-index: 1;
                  }
                  .nav-menu {
                    position: relative;
                    float: right;
                    top: 50%;
                    transform: translateY(-50%);
                  }
              `}</style>
          </Header>
      );
  }
}

export default PageHeader;
