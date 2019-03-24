import React, { Component } from 'react';
import Layout from './Layout';
import { Radio} from 'antd';

export default class PositiveAffirmation extends Component {
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
          onChange={this.changeButton}
          className="radio-buttons"
        >
          <Radio.Button value={true}>Start</Radio.Button>
          <Radio.Button value={false}>Stop</Radio.Button>
        </Radio.Group>         
        {
          changeButton &&
          <Button.Group size={size}>
            <Button type="primary">Happy</Button>
            <Button type="primary">Sad</Button>
            <Button type="primary">Fullfiled</Button>
          </Button.Group>         
        }
        <style jsx>{`
          Radio.Group {
            font-size: 100px;
            margin-left: 20px;
            margin-top: 5px;
            margin-bottom: 5px;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </Layout>
    );
  }
}
