import React,{Component} from 'react'
import './Header.css'

class Header extends Component{
    render(){
        return(
            <header>{this.props.title}</header>
        )
    }
}

export default Header;