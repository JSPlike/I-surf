import React,{Component} from 'react';

class Description extends Component{
    render(){
        return(
            <div>
            <div>Short Description of the study</div>
            <button onClick={()=>{this.props.handler('Hello.')}}>next page</button>
            </div>
        )
    }
}

export default Description