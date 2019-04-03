import React from 'react';
import { Button } from 'antd';
import Background from '../../images/background_image.jpg';

let body = {
    backgroundImage: `url(${Background})`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
};
let button = {
    height: "50px",
    padding: "2px",
};
let texts = {
    textAlign: "center",
    fontSize: "20px",
    color: "#000",
};



class Home extends React.Component {
    state = {
        affirmations: [
            "Today, I am growing",
            "Today, I am loved",
            "Today, I feel blessed",
            "Today, I am thankful"
        ],
        clicked: false,
        selectedAffirmation: null
    };

    handleClick = () => {
        this.setState({
            clicked: true,
            selectedAffirmation: this.state.affirmations[Math.floor(Math.random() * this.state.affirmations.length)]
        })
    }
    render() {
        return (
            <div style={body}>
                <Button onClick={this.handleClick} style={button}>Refocus your day</Button>
                <span style={texts}>{this.state.clicked && this.state.selectedAffirmation}</span>
            </div>
        );
    }
}

export default Home;
