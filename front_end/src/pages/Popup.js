import React, {Component} from 'react'
import './Popup.css'
class Popup extends Component{
    constructor(props){
        super(props)
        this.state = {
            text : this.props.text
        }
    }

    render(){
        return(
            <div className = 'Popup'>{this.state.text}</div>
        )
    }
}

export default Popup