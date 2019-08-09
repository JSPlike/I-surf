import React, {Component} from 'react'
import './Calendar.css'
import Fab from '@material-ui/core/Fab';
import InfiniteCalendar from './infiniteCalendar'
import 'react-infinite-calendar/styles.css';
import Modal from '@material-ui/core/Modal'

class Calendar extends Component{
    constructor(props){
        super(props)
        this.state = {
            personInfo : [
                {label : "Weight"},
                {label : "Sleep"},
                {label : "Water"}
            ],
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
                    <div className="paper">

                    <section className="input_row">
                    <h4>Personal Info</h4>
                    <div className="input_row_center">
                        {this.state.personInfo.map((person, i) => {
                            return(
                            <Fab aria-label={person.label} className="fab">
                            {person.label}
                            </Fab> )
                          })}
                    </div>
                    </section>

                    <hr />

                    <section className="input_row">
                    <h4>Mood Info</h4>
                    <div className="input_row">
                        {this.state.moodInfo.map((mood, i) => {
                            return(
                            <Fab aria-label={mood.label} className="fab_r">
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
                            <Fab aria-label={symptom.label} className="fab_b">
                            {symptom.label}
                            </Fab> )
                        })}
                    </div>
                    </section>
                    
                    <hr />
                    <button onClick = {this.props.handler}>save</button>
                    </div>
                </Modal>
            </div>
                <InfiniteCalendar onSelect={this.handleOpen}/>   
        </section>
        )
    }
}

export default Calendar