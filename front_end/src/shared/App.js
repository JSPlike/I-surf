import React, { Component } from 'react'
import { Home, AppStoreA, AppStoreB, Calendar, Graph, HomeAfter, Survey } from '../pages'
import Header from './Header'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : 'Hello.'
        }
        this.handler = this.handler.bind(this)
    }

    handler(someValue){
        this.setState({
            title : someValue
        })
    }

    render() {
        var app = null
        if (true) app = <Survey></Survey>
        // if(this.state.title === 'Hello.') app = <Home handler={this.handler}/>
        else if(this.state.title === 'Install application.') app = <AppStoreA handler={this.handler}/>
        else if(this.state.title === 'Install application.') app = <AppStoreB handler={this.handler}/>
        else if(this.state.title === 'Click the FERP application.') app = <HomeAfter handler={this.handler}/>
        else if(this.state.title === 'Main view.') app = <Calendar handler={this.handler}/>
        else if(this.state.title === 'Graph') app = <Graph handler={this.handler}/>
        return (
            <div>
                {/* <div style={{position : "fixed", top :0, alwaysOnTop : true}}>
                <Header title={this.state.title} changeTitle = {this._changeTitle} />
                </div> */}
            {app}
            </div>
        );
    }
}

export default App;