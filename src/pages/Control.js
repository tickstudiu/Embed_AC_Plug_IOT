import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Container } from 'reactstrap';

export default class Control extends Component {
    render() {
        return (
            <Container>
                <p>Control Page Here...</p>
                <Link to="/">GO Back to Home</Link>
            </Container>
        )
    }
}
