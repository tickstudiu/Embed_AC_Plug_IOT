import React from 'react';
import { Link } from "react-router-dom";

import { Container } from 'reactstrap';

const Control = () => {
    return (
        <Container>
            <p>Control Page Here...</p>
            <Link to="/">GO Back to Home</Link>
        </Container>
    )
}

export default Control
