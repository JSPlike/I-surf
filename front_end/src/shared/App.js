import React, { Component } from 'react'
import { Home, AppStore, Kaya, HomeAfter, Survey, Input, Main } from '../pages'
import Header from './Header'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : 'Hello.',
            ver : 'A'
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
        if(this.state.title === 'Hello.') app = <Home handler={this.handler}/>
        else if(this.state.title === 'Install application.') app = <AppStore handler={this.handler}  ver = {this.state.ver}/>
        else if(this.state.title === 'Click the KAYA application.') app = <HomeAfter handler={this.handler}/>
        else if(this.state.title === 'Main view.') app = <Kaya handler={this.handler}/>
        else if(this.state.title === 'Survey.') app = <Survey/>
        return (
            <div>
            {app}
            </div>
        );
    }
}

export default App;