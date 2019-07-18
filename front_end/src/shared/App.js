import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, AppStore } from '../pages'
import history from '../pages/history'

class App extends Component {
    render() {
        return (
            <Router history = {history} forceRefresh = {true}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/appStore" component={AppStore}/>
            </div>
            </Router>
        );
    }
}

export default App;