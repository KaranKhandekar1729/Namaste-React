import User from './User'
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //
    }

    render() {
        return (
            <div>
                <h1 color="white">This is my About page</h1>
                <UserClass
                    name={"Karan"}
                    location={"Mumbai"}
                    contact={"@julescomet"}
                />
            </div>
        );
    };
};

export default About;