import User from './User'
import UserClass from './UserClass';
import { Component } from 'react';
import "../../aboutUs.css";

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
                <UserClass />
            </div>
        );
    };
};

export default About;