import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home';
import MyJourn from './MyJourn'
import Record from './Records'
import UpJourn from './upJourn'


class App extends Component{


    render(){
        return(
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route path= "/myjourn" component={MyJourn}/>
                    <Route path = "/record" component = {Record} />
                    <Route path = "/update" component = {UpJourn} />
                </div>
            </Router>
        )
    }
}

export default App