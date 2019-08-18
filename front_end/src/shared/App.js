import React, { Component } from 'react'
import { Description, Home, AppStore, Kaya, HomeAfter, Survey, End, Main, Splash } from '../pages'
import { getIdNum } from '../api/axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID : '',
            title: 'Login.',
            ver: 'A',
            first_try: true,
            end : false
        }
        this.handler = this.handler.bind(this)
        this.IDhandler = this.IDhandler.bind(this)
    }

    handler(someValue) {
        this.setState({
            title: someValue
        })
        if (someValue === 'Description.') {
            if(this.state.end) this.setState({
                title: 'End.'
            })
            if(!this.state.first_try){
            this.setState({
                ver : this.state.ver === 'A' ? 'B' : 'A',
                end : true
            })
            }
            else{
                this.setState({
                    first_try : false
                })
            }
        }
    }

    IDhandler(id){
        this.setState({
            userID : id
        })
        // const data = getIdNum()
        // //console.log(data)
        // if(data%2 == 0){
        //     this.setState({
        //         ver:'A'
        //     })
        // }
        // else{
        //     this.setState({
        //         ver:'B'
        //     })
        // }
    }

    render() {
        var app = null
        if(this.state.title === 'Login.') app = <Main handler={this.handler} IDhandler ={this.IDhandler}/>
        else if (this.state.title === 'Description.') app = <Description handler={this.handler} />
        //First Background Screen(iOS Screen before install App)
        else if (this.state.title === 'Hello.') app = <Home handler={this.handler}/>
        //App Store Screen(Description & Image)
        else if (this.state.title === 'Install application.') app = <AppStore handler={this.handler} ver={this.state.ver} />
        else if (this.state.title === 'Click the KAYA application.') app = <HomeAfter handler={this.handler} />
        //Calendar Screen
        else if(this.state.title === 'Splash.') app = <Splash handler = {this.handler}/>
        else if (this.state.title === 'Kaya.') app = <Kaya handler={this.handler} />
        //Survey Screen
        else if (this.state.title === 'Survey.') app = <Survey handler={this.handler} userID={this.state.userID} />
        if (this.state.title === 'End.') app = <End/>
        return (
            <div>
                {app}
            </div>
        );
    }
}

export default App;