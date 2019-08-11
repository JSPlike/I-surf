import React, {Component} from 'react';
import './AppStore.css';

import Install from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Fab from '@material-ui/core/Fab';

import Ferp from '../resources/Calendar - Blank.png';
import Preview1 from '../resources/PreView1.jpeg';

import KAYAIcon from '../resources/KAYA.png';

import StarRatings from 'react-star-ratings'
import Modal from '@material-ui/core/Modal'

class AppStore extends Component{
    constructor(props){
        super(props)
        console.log(props.ver)
        this.state = {
            ver : props.ver,
            open : true
        }
    }
    
  handleOpen = () => {
        this.setState({
            open : true
        })
    };

    handleClose = () => {
        this.setState({
            open : false
        })
    }

    render(){
        return(
        <section className="background_app_store">
              <Modal 
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.handleClose}>
          <div>
        <button onClick = {this.handleClose}>X</button>
        <div>Please read the whole descripiton and install the app</div></div>
        </Modal>
        {/* First Section */}
            <article className="simple_info">
            <div className="Logo"><img src={KAYAIcon} alt="logo"></img></div>
            <div className="AppName">
                <div className="AppName_Inside">
                    <h4>KAYA</h4>
                </div>
            </div>
            <div className="CompanyName">
                <div className="CompanyName_Inside">
                    <p>UCI</p>
                </div>
            </div>
            <div className="InstallButton">
                <button onClick={()=>{this.props.handler('Click the KAYA application.')}}>
                <Install className='install_button' variant="contained" size="small" 
                    >Install
                 </Install>
                 </button>
            </div>
            <div className="BlankNull"></div>
            <div className="OtherButton">
                <Fab aria-label="Other" size = "small">
                    <MoreHorizIcon />
                </Fab>
            </div>
            <div className="Rating">
                <h4>4.7</h4>
                <StarRatings rating={4.7} starRatedColor="#3776f0" numberOfStarts={5} name='rating' starDimension="20px" starSpacing={"2px"}></StarRatings>
                <h6>36.9K Ratings</h6>
            </div>
            <div className="Ranking">
                <h4>#2</h4>
                <h6>Reference</h6>
            </div>
            <div className="Age">
                <h4>17+</h4>
                <h6>Age</h6>
            </div>
        </article>
            <hr
                style={{
                    color: "#E7E7E7",
                    height: 0.5,
                }}
            />
            <section className="AppDescription">
            <h4>PreView</h4>
            <img src={Preview1} alt="Preview1"></img>
            <hr
                style={{
                    color: "#E7E7E7",
                    height: 0.5,
                }}
            />
            <h4>Description</h4>
            <p>{this.state.ver === 'A'? 'Your body is unique and now so is your app. Get personalized fertility recommendations straight to your phone. KAYA is a fertility tracking app that predicts your menstrual cycles with precision and accuracy. It uses smart algorithms to predict your ovulation cycle. Powered by Machine Learning and Artificial Intelligence.' : 
            'Your body is unique and now so is your app. Get personalized fertility recommendations straight to your phone. KAYA is a fertility tracking app that predicts your menstrual cycles with precision and accuracy. It uses your personal health information and fertility knowledge to predict your ovulation cycle. Powered by you. Take control.'}<br /><br /><br />
            </p>
        </section>
        </section>
        )
    }
}

export default AppStore