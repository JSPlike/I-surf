import React,{Component} from 'react';
import CustomButton from '@material-ui/core/Button';

import './Description.css';

class Description extends Component{
    render(){
        return(
            <article className='background_description'>
                <div className='descrpition_header'>
                    <h1>Short Description</h1>
                    <p> Description example </p>
                </div>
                <button onClick={()=>{this.props.handler('Hello.')}} className='background_description_button'>
                    <CustomButton variant="contained" color="primary">START</CustomButton>
                </button>
            </article>
        )
    }
}

export default Description