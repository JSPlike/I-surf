import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, AppStoreA, AppStoreB, Calendar, Graph } from '../pages'

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/appStoreA" component={AppStoreA}/>
                <Route exact path="/appStoreB" component={AppStoreB}/>
                <Route exact path="/calendar" component={Calendar}/>
                <Route exact path="/graph" component={Graph}/>
            </div>
            </Router>
        );
    }
}

export default App;