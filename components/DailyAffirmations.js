import React, { Component } from 'react';
import Layout from './Layout';
import HappyAffirmation from './HappyAffirmation';
import { Radio, Button } from 'antd';

export default class DailyAffirmations extends Component {
  state = {
    changeButton: false,
  };

  toggleChangeButton = e => {
    this.setState ({
      changeButton: e.target.value,
    });
  }

  render() {
    const { changeButton } = this.state;
    return (
      <Layout>
        <Radio.Group
          defaultValue="false"
          buttonStyle="solid"
          onChange={this.toggleChangeButton}
          className="radio-buttons"
        >
          <Radio.Button value={true}>Start</Radio.Button>
          <Radio.Button value={false}>Refocus your day</Radio.Button>
        </Radio.Group>
        {
          changeButton && (
          <Button.Group>
            <HappyAffirmation />
            <Button type="primary">Today I am sad</Button>
            <Button type="primary">Today I am fullfiled</Button>
            <Button type="primary">Today I am blessed</Button>
          </Button.Group> 
        )}
        <style jsx>{`
          // Radio.Group {
          //   font-size: 100px;
          //   margin-left: 20px;
          //   margin-top: 5px;
          //   margin-bottom: 5px;
          //   display: flex;
          //   justify-content: center;
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
          }
        `}</style>
      </Layout>
    );
  }
}
