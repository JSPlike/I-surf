//this page for input screen
//but our app input screen combine with calendar screen
//so this code not use now
//but if you can seperate screen, you will use this code

import React from 'react';

import './Input.css';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
//import AddIcon from '@material-ui/icons/Add';
//import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';

import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const useStyles = makeStyles(theme => ({
fab: {
    margin: theme.spacing(1),
    color: '#fff',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    fontSize: '12px',
    width: '65px',
    height: '65px',
},
fab_r: {
    margin: theme.spacing(1),
    color: '#fff',
    background: 'linear-gradient( 270.3deg,  rgba(67,252,48,1) -1%, rgba(23,129,0,1) 103.4% )',
    fontSize: '10px',
    width: '65px',
    height: '65px',
},
fab_b: {
    margin: theme.spacing(1),
    color: '#fff',
    background: 'linear-gradient( 107deg,  rgba(2,108,223,1) 27.4%, rgba(0,255,255,1) 92.7% )',
    fontSize: '10px',
    width: '65px',
    height: '65px',
},
button_back: {
    color: "#fff",
    position: "fixed",
    right: "0",
    top: "0",
    backgroundColor: "none",
    height: "98px",
    width: "98px",
    // width: "100%",
    zIndex: "10",
  }
}));

const PersonInfo = () => {
    const classes = useStyles();
    return(
        <section className="input_row">
            <h4>Personal Info</h4>
            <div className="input_row_center">
                <div className="input_row_center_content">
                    <Fab aria-label="Weight" className={classes.fab} size="large">
                        Weight
                    </Fab>  
                </div>
                <div className="input_row_center_content">
                    <Fab aria-label="Sleep" className={classes.fab}>
                        Sleep
                    </Fab>
                </div>
                <div className="input_row_center_content">
                    <Fab aria-label="Water" className={classes.fab}>
                        Water
                    </Fab>
                </div>
            </div>
        </section>
        
    );
}

const MoodInfo = () => {
    const classes = useStyles();
    return(
        <section className="input_row">
            <h4>Mood Info</h4>
            <div>
            

                <Fab aria-label="Calm" className={classes.fab_r}>
                    Calm
                </Fab>
                <Fab aria-label="Happy" className={classes.fab_r}>
                    Happy
                </Fab>
                <Fab aria-label="Energetic" className={classes.fab_r}>
                    Energetic
                </Fab>
                <Fab aria-label="Frisky" className={classes.fab_r}>
                    Frisky
                </Fab>
                <Fab aria-label="Mood swings" className={classes.fab_r}>
                    Mood swings
                </Fab>
                <Fab aria-label="Irritated" className={classes.fab_r}>
                    Irritated
                </Fab>
                <Fab aria-label="Sad" className={classes.fab_r}>
                    Sad
                </Fab>
                <Fab aria-label="Anxious" className={classes.fab_r}>
                    Anxious
                </Fab>
                <Fab aria-label="Depressed" className={classes.fab_r}>
                    Depressed   
                </Fab>
                <Fab aria-label="Feeling guilty" className={classes.fab_r}>
                    Feeling guilty
                </Fab>
                <Fab aria-label="Obsessive thoughts" className={classes.fab_r}>
                    Obsessive thoughts
                </Fab>
                <Fab aria-label="Apathetic" className={classes.fab_r}>
                    Apathetic
                </Fab>
                <Fab aria-label="Confused" className={classes.fab_r}>
                    Confused
                </Fab>
                <Fab aria-label="Very self-critical" className={classes.fab_r}>
                    Very self-critical
                </Fab>
                
                
            </div>
        </section>
        
    );
}

const SymptomsInfo = () => {
    const classes = useStyles();
    return(
        <section className="input_row">
            <h4>Symptoms Info</h4>

            <div>
            
                <Fab aria-label="Fine" className={classes.fab_b}>
                    Fine
                </Fab>
                <Fab aria-label="Cramps" className={classes.fab_b}>
                    Cramps
                </Fab>
                <Fab aria-label="Tender breasts" className={classes.fab_b}>
                    Tender breasts  
                </Fab>
                <Fab aria-label="Headache" className={classes.fab_b}>
                    Headache
                </Fab>
                <Fab aria-label="Acne" className={classes.fab_b}>
                    Acne
                </Fab>
                <Fab aria-label="Backache" className={classes.fab_b}>
                    Backache
                </Fab>
                <Fab aria-label="Nausea" className={classes.fab_b}>
                    Nausea
                </Fab>
                <Fab aria-label="Fatigue" className={classes.fab_b}>
                    Fatigue
                </Fab>
                <Fab aria-label="Bloating" className={classes.fab_b}>
                    Bloating
                </Fab>
                <Fab aria-label="Cravings" className={classes.fab_b}>
                    Cravings
                </Fab>
                <Fab aria-label="Insomnia" className={classes.fab_b}>
                    Insomnia
                </Fab>
                <Fab aria-label="Constipation" className={classes.fab_b}>
                    Constipation
                </Fab>
                <Fab aria-label="Diarrhea" className={classes.fab_b}>
                    Diarrhea
                </Fab>

        </div>
        </section>
        
    );
}

export default function Input() {
    const classes = useStyles();
    return (
        <section className="background_input">
            <Button aria-label="back" 
                    className={classes.button_back}>
                <ClearIcon />
            </Button>
            <InfiniteCalendar
                    width={(window.innerWidth <= 500) ? window.innerWidth : 500}
                    height={0}
                    className="calendar_Header"
                    min={new Date()}
                    max={new Date()}
                    theme={{
                        selectionColor: 'rgb(235, 64, 47)',
                        textColor: {
                          default: '#333',
                          active: '#FFF'
                        },
                        weekdayColor: 'rgb(237, 103, 98)',
                        headerColor: 'rgb(235, 64, 47)',
                        floatingNav: {
                          background: 'rgba(81, 67, 138, 0.96)',
                          color: '#FFF',
                          chevron: '#FFA726'
                        }
                     }}
            />
            
            <PersonInfo></PersonInfo>
            <hr />
            <MoodInfo></MoodInfo>
            <hr />
            <SymptomsInfo></SymptomsInfo>
            <hr />

        </section>
    )
}