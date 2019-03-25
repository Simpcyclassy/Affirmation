import React, { Component } from 'react';
import Layout from './Layout';
import { Button } from 'antd';

const affirmationTexts = [
    "Pronoun1 must know what awaits pronoun15 at the end of this rope so Pronoun1 do not give up",
    "The past has no power over pronoun15 anymore. Pronoun1 embrace the rhythm and the flowing of pronoun2 own heart",
    "All that Pronoun1 need comes to pronoun15 at the right time and place in this life",
    "Pronoun4 deeply fulfilled with who Pronoun4."
];

// function generateAffirmationTexts(affirmationText => (
//    Math.floor( Math.random() * affirmationText.length );
// ))



export default class HappyAffirmation extends Component {
  render() {
    return (
      <Layout>
        <Button onClick={generateAffirmationTexts()} type="primary">Today I am blessed</Button>        
        <style jsx>{`
          }
        `}</style>
      </Layout>
    );
  }
}
