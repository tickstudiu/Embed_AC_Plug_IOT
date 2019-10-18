// App.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from 'firebase';

import Header from '../components/Header';
import MessageList from '../components/MessageList';
import MessageBox from '../components/MessageBox';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Header title="Simple Firebase App" />
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <MessageList db={firebase} />
          </Col>
        </Row>

        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h3>Set Name</h3>
            <MessageBox db={firebase} type="name" />
          </Col>
        </Row>

        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h3>Set Age</h3>
            <MessageBox db={firebase} type="age" />
          </Col>
        </Row>
        <Link to="/control">GO Next Page</Link>
      </Container>
    );
  }
}
export default App;