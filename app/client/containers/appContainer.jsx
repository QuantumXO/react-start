
import 'assets/styles.sass';

import React, {Component} from "react";

import console from 'helpers/console';

export default class AppContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <h1>React</h1> <br/>
                Author: <span className="bold">QuantumXO</span> <br/>
                React <span className="bold">v{React.version}</span>
            </React.Fragment>
        )
    }
}
