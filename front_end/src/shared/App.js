import React, { Component } from 'react'
import { Description, Home, AppStore, Kaya, HomeAfter, Survey,   Main } from '../pages'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : 'Description.',
            ver : 'A'
        }
        this.handler = this.handler.bind(this)
    }

    handler(someValue){
        this.setState({
            title : someValue
        })
        if(this.state.title === 'Description.'){
            this.setState({
                ver : this.state.ver === 'A' ? 'B' : 'A'
            })
        }
    }

    render() {
        var app = null
        if(this.state.title === 'Description.') app = <Description handler = {this.handler}/>
        //First Background Screen(iOS Screen before install App)
        else if(this.state.title === 'Hello.') app = <Home handler={this.handler}/>
        //App Store Screen(Description & Image)
        else if(this.state.title === 'Install application.') app = <AppStore handler={this.handler}  ver = {this.state.ver}/>
        
        else if(this.state.title === 'Click the KAYA application.') app = <HomeAfter handler={this.handler}/>
        //Calendar Screen
        else if(this.state.title === 'Main view.') app = <Kaya handler={this.handler}/>
        //Survey Screen
        else if(this.state.title === 'Survey.') app = <Survey handler={this.handler}/>
        return (
            <div>
            {app}
            </div>
        );
    }
}

export default App;