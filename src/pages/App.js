// App.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import MessageList from '../components/MessageList';
import MessageBox from '../components/MessageBox';
import firebase from 'firebase';
class App extends Component {
render() {
  return (
    <div>
    <div className="container">
      <Header title="Simple Firebase App" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">

          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
        <h3>Set Name</h3>
          <MessageBox db={firebase} type="name" />
        </div>
      </div>

      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
        <h3>Set Age</h3>
          <MessageBox db={firebase} type="age"  />
        </div>
      </div>
      <Link to="/control">GO Next Page</Link>
    </div>
    </div>
  );
 }
}
export default App;