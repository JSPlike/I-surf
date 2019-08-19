import React,{Component} from 'react';
import CustomButton from '@material-ui/core/Button';

import './Description.css';

class Description extends Component{
    render(){
        return(
            <article className='background_description'>
                <div className='descrpition_header'>
                    {/* you put Title here */}
                    <h1>Pre-experiment instructions</h1>
                    {/* you put Some Description here */}
                    <p> <br/>Purpose and Procedure<br/>
                        Thank you for taking part in this experiment. We are studying how users understand fertility self-tracking tools and algorithms. The experiment should take approximately 60 minutes to complete. [TODO: what the participant will do]
                        You will see two versions of the same app, one after the other. There will be instructions for what to do. If you ever need to retrieve the instructions, just tap the (?) in the upper right corner:
                        {/* <image> */}
                        <br/>
                        [ PROCEED ]
                        <br/>Responses will be Confidential<br/>		
                        All records from this study will be kept private. Your responses will not affect your current or future experience or relations with UCI. In addition, in any sort of report we might publish, we will not include any information that makes it possible to identify you. Research records will be stored securely, and only researchers will have access to the records.		
                        <br/>Contacts and Questions<br/>	
                        This survey is being conducted by the HAI lab in the Informatics Dept. at UCI. If you have any questions about this study, please feel free to contact the researchers at support@twitter.com.
                    </p>
                </div>
                <button onClick={()=>{this.props.handler('Hello.')}} className='background_description_button'>
                    <CustomButton variant="contained" color="primary">START</CustomButton>
                </button>
            </article>
        )
    }
}

export default Description