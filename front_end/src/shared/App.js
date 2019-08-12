import React, { Component } from 'react'
import { Description, Home, AppStore, Kaya, HomeAfter, Survey, End, Main } from '../pages'
import Header from './Header'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Login.',
            ver: 'A',
            first_try: true
        }
        this.handler = this.handler.bind(this)
    }

    handler(someValue) {
        this.setState({
            title: someValue,
            showPopup: true
        })
        if (this.state.title === 'Description.') {
            if(!this.state.first_try){
            this.setState({
                ver : this.state.ver === 'A' ? 'B' : 'A'
            })
            }
            else{
                this.setState({
                    first_try : false
                })
            }
        }
    }

    render() {
        var app = null
        if(this.state.title === 'Login.') app = <Main handler={this.handler}/>
        else if (this.state.title === 'Description.') app = <Description handler={this.handler} />
        //First Background Screen(iOS Screen before install App)
        else if (this.state.title === 'Hello.') app = <Home handler={this.handler}/>
        //App Store Screen(Description & Image)
        else if (this.state.title === 'Install application.') app = <AppStore handler={this.handler} ver={this.state.ver} />
        else if (this.state.title === 'Click the KAYA application.') app = <HomeAfter handler={this.handler} />
        //Calendar Screen
        else if (this.state.title === 'Kaya.') app = <Kaya handler={this.handler} />
        //Survey Screen

        else if (this.state.title === 'Survey.') app = <Survey handler={this.handler} />
        else if (this.state.title === 'End.') app = <End/>
        return (
            <div>
                {app}
            </div>
        );
    }
}

export default App;