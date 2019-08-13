import React,{Component} from 'react';
import SplashImage from './resources/Clock.png';

import './Splash.css';

class Splash extends Component{
    render(){
        return(
            <div className='background_splash'>
                <div className='splash_img'>
                    <img src={SplashImage} width='100px' height='100px'></img>
                </div>
                
            </div>
        )
    }
}

export default Splash