import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import firebase from 'firebase';

import App from './pages/App';
import Control from './pages/Control';
import Public from './services/hoc/Public';

class Root extends React.Component {
    constructor(props) {
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
            <Router>
                <Switch>
                    <Route exact path="/" component={Public(App)} />
                    <Route exact path="/control" component={Public(Control)} />
                </Switch>
            </Router>
        )
    }
}

export default Root