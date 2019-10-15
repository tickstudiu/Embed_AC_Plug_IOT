// App.js
import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Navbar from './components/Navbar';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {

  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div>
    <Navbar/>
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
      <a href="../page/Control">GO Next Page</a>
    </div>
    </div>
  );
 }
}
export default App;