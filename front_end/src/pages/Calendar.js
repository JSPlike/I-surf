import React, {Component} from 'react'
import './Calendar.css'
import Fab from '@material-ui/core/Fab';
import Save from '@material-ui/core/Button';
import InfiniteCalendar from './infiniteCalendar'
import 'react-infinite-calendar/styles.css';
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField';

class Calendar extends Component{
    constructor(props){
        super(props)
        this.state = {
            //PersonalInfo
            // you can put input data type here
            personalInfo : [
                {label : "Weight"},
                {label : "Sleep"},
                {label : "Water"}
            ],
            //MoodInfo
            moodInfo : [
                {label: "Calm"},
                {label: "Happy"},
                {label: "Energetic"},
                {label: "Frisky"},
                {label: "Mood swings"},
                {label: "Irritated"},
                {label: "Sad"},
                {label: "Anxious"},
                {label: "Depressed"},
                {label: "Feeling guilty"},
                {label: "Obsessive thoughts"},
                {label: "Apathetic"},
                {label: "Confused"},
                {label: "Very self-critical"}
            ],
            //SymtomsInfo
            symtomsInfo:[
                {label: "Fine"},
                {label: "Cramps"},
                {label: "Tender breasts"},
                {label: "Headache"},
                {label: "Acne"},
                {label: "Backache"},
                {label: "Nausea"},
                {label: "Fatigue"},
                {label: "Bloating"},
                {label: "Cravings"},
                {label: "Insomnia"},
                {label: "Constipation"},
                {label: "Diarrhea"}
            ],
            open : false
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
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

    save = () => {
        this.setState({
            open:false
        })
        this.props.handler()
    }

    click = (e) => {
        console.log(e.currentTarget)
    }

    render(){
        return(
            <section className="Calendar_Size">
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className="paper"
                    style={{
                        // position: 'absolute',
                        width: '80vw',
                        maxWidth: '500px',
                        background: 'linear-gradient(45deg,  rgba(248,196,249,0.66) 22.8%, rgba(253,122,4,0.15) 64.6% )',
                        backgroundPosition: 'center',
                        border: '2px solid #000',
                        height : '100vh',
                        overflowY: 'auto',
                        margin: 'auto',
                    }}
                    >

                    <section className="input_row">
                    <h4>Personal Info</h4>
                    <div className="input_row_center">
                        {this.state.personalInfo.map((personal, i) => {
                            return(
                                <div class = 'fab' onClick={this.click} value = {personal.label}> 
                            <Fab
                            style={{
                                margin : '10px',
                                color: '#fff',
                                // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                background: 'rgba(250, 146, 38, 1.0)',
                                fontSize: '12px',
                                width: '65px',
                                height: '65px',
                            }}
                            >
                            {personal.label}
                            </Fab>
                            <TextField
                                id="outlined-name"
                                label={personal.label}
                                // value={values.name}
                                // onChange={handleChange('name')}
                                margin="normal"
                                variant="outlined"
                            />
                            </div> )
                          })}
                    </div>
                    </section>

                    <hr />

                    <section className="input_row">
                    <h4>Mood Info</h4>
                    <div className="input_row">
                        {this.state.moodInfo.map((mood, i) => {
                            return(
                            <Fab aria-label={mood.label} className="fab_r"
                            //this css style
                            style={{
                                margin : '10px',
                                color: '#fff',
                                // background: 'linear-gradient( 107deg,  rgba(2,108,223,1) 27.4%, rgba(0,255,255,1) 92.7% )',
                                background: 'rgba(161, 228, 141, 1.0)',
                                fontSize: '10px',
                                width: '65px',
                                height: '65px',
                            }}
                            >
                            {mood.label}
                            </Fab> )
                        })}
                    </div>
                    </section>
                    
                    <hr />
                    
                    <section className="input_row">
                    <h4>Symptoms Info</h4>
                    <div className="input_row">
                        {this.state.symtomsInfo.map((symptom, i) => {
                            return(
                            <Fab aria-label={symptom.label} className="fab_b"
                            style={{
                                margin : '10px',
                                color: '#fff',
                                // background: 'linear-gradient( 270.3deg,  rgba(67,252,48,1) -1%, rgba(23,129,0,1) 103.4% )',
                                background: 'rgba(92, 194, 252, 1.0)',
                                fontSize: '10px',
                                width: '65px',
                                height: '65px',
                            }}
                            >
                            {symptom.label}
                            </Fab> )
                        })}
                    </div>
                    </section>
                    
                    <hr />
                    <button onClick = {this.save}
                        style={{display: 'block', margin: '0 auto',}}
                    ><Save variant="contained" color="primary">save</Save>
                    </button>
                    <br /><br /><br /><br /><br /><br />
                    </div>
                </Modal>
            </div>
                <InfiniteCalendar onSelect={this.handleOpen}/>   
        </section>
        )
    }
}

export default Calendar