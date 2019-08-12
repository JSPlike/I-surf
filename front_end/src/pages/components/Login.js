//react component
import React, { Component } from 'react'
import { login } from './UserFunctions'
import { Kaya } from '..';

export default class Login extends Component {
  //constructor 
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

//login check
  onSubmit(e) {
    e.preventDefault()

    const user = {
      code: this.state.code,
      password: this.state.password
    }
//if the data isn't in db
    login(user).then(res => {
      if (res != undefined) {
        this.props.handler('Description.')
      } else {
        // alert("Please fill out")
        this.props.handler('Description.')
      }
    })

  }
//Login Form
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5 mx-auto">
          <br/>
            <form noValidate onSubmit={this.onSubmit}>

              <h1 className="h3 mb-3 font-weight-normal">
                Enter Code
              </h1>
              <div className="form-grop">
                <label htmlFor="code">Code:</label>
                <input type="text"
                  className="form-control"
                  name="code"
                  placeholder="Enter Code"
                  value={this.state.code}
                  onChange={this.onChange} />
              </div>
              <br />
              <div className="form-grop">
                <label htmlFor="password">Password:</label>
                <input type="none"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange} />
              </div>
              <br />
              <br />
  
              <button type="submit" className="btn btn-lg btn-primary btn-block">
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}