import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import './Main.css'

class Main extends Component {

  render() {
    return (
      <Router>
        <div className="Main">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={() => <Login IDhandler = {this.props.IDhandler} handler={this.props.handler} />} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    )
  }
}
export default Main;