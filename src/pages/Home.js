// App.js
import React from 'react';
import { Link } from "react-router-dom";
import firebase from 'firebase';

import MessageList from '../components/MessageList';
import MessageBox from '../components/MessageBox';

import { Container, Row, Col } from 'reactstrap';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 6}}>
          <h3>Msg List</h3>
          <MessageList db={firebase} />
        </Col>

        <Col md={{ size: 6 }}>
          <h3>Set Name</h3>
          <MessageBox db={firebase} type="name" />
          <h3>Set Age</h3>
          <MessageBox db={firebase} type="age" />
        </Col>
      </Row>

      <Link to="/control">GO Next Page</Link>
    </Container>
  );
}
export default Home;