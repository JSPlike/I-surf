import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, AppStoreA, AppStoreB } from '../pages'

class App extends Component {
    state ={
        Afirst : false
    }
    render() {
        return (
            <Router>
            <div>
                <Route exact path="/" 
                render={(props) => <Home Afirst={this.state.Afirst} isAuthed={true}/>}/>
                <Route exact path="/appStoreA" component={AppStoreA}/>
                <Route exact path="/appStoreB" component={AppStoreB}/>
            </div>
            </Router>
        );
    }
}

export default App;