import React from 'react';
import { Avatar, Menu, Layout } from 'antd';

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
                  <Avatar src="/Logo.png" size="large" shape="regular"/>
                  <Item key="sign in"> Sign in </Item>
                  <Item key="map View"> Map View </Item>
                  <Item key="home"> Home </Item>
              </Menu>
              <style jsx>{`
                  Avatar {
                      float: left;
                      position: relative;
                      top: 50%;
                      transform: translateY(-50%);
                  }
                  Header {
                    position: fixed;
                    width: 100%;
                    z-index: 1;
                  }
                  Item {
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
