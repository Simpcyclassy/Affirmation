import React from 'react';
import { Menu, Button } from 'antd';

const { Item } = Menu;

class Home extends React.Component {

    render() {
        return (
            <div className="bg-img">
            <Button span={6}>Refocus your day</Button>
            <style jsx>{`
              .bg-img {
                background-image:
                linear-gradient( rgba(0, 0, 0, 0.336),
                rgba(0, 0, 0, 0.281)),
                url(/background_image.jpg);
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
