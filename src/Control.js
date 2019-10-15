import React, { Component } from 'react'
import Navbar from './components/Navbar';
import firebase from 'firebase';
export default class Control extends Component {
    constructor(props){
        super(props);
        var config = {
          apiKey: "AIzaSyBVbhVhCXfWZ4OtaXSxB3UC1gW9JGq3pbA",
          authDomain: "embedapp-9157e.firebaseapp.com",
          databaseURL: "https://embedapp-9157e.firebaseio.com",
          projectId: "embedapp-9157e",
          storageBucket: "embedapp-9157e.appspot.com",
          messagingSenderId: "271166942683",
          appId: "1:271166942683:web:66dc2b700bc620c89b0bfe",
          measurementId: "G-S9Y65TP0RC"
        };
        firebase.initializeApp(config);
      }
    render() {
        return (
            <div>
                Control Page Here...
            </div>
        )
    }
}
