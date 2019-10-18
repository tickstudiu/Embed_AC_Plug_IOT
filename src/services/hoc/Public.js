import React, {Component, Fragment} from "react";

import Navbar from '../../components/Navbar';

const Public = ComposedComponent => {
    class Public extends Component {

        render() {

            return (
                <Fragment>
                    <Navbar/>
                    <ComposedComponent {...this.props} />
                </Fragment>
            );
        }
    }


    return Public;
};

export default Public