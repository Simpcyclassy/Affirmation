import React from 'react';
import { Button } from 'antd';
import BackgroundImage from '../../images/background_image.jpg';

class Home extends React.Component {
    state = {
        affirmations: [
            "Today I am growing",
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
            <div className="bg-img">
            <Button onClick={this.handleClick}>Refocus your day</Button>
            <h1>{this.state.clicked && this.state.selectedAffirmation}</h1>
            <style jsx>{`
              .bg-img {
                // background-image:
                // linear-gradient( rgba(0, 0, 0, 0.336),
                // rgba(0, 0, 0, 0.281)),
                // url(/background_image.jpg);
                background: url() no-repeat;
                width: 100%;
                height: 100vh;
                background-size: cover;
                }
                Button {
                    height: 50px;
                    padding: 2px;
                    align-items: center;
                    display: flex;
                    justify-content: center;
                }
            `}</style>
          </div>
        );
    }
}

export default Home;
