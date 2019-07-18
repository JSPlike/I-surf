import React from 'react';

import './Input.css';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';

import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    color: '#fff',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  fab_r: {
    margin: theme.spacing(1),
    color: '#fff',
    background: 'linear-gradient(94.5deg, #ffed68 -1.2%, #3df7ff 119.2%)',
  },
  fab_b: {
    margin: theme.spacing(1),
    color: '#fff',
    background: 'linear-gradient( 107deg,  rgba(2,108,223,1) 27.4%, rgba(0,255,255,1) 92.7% )',
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
        <div className="input_row">
            <h4>Personal Info</h4>
            <Fab aria-label="Add" className={classes.fab}>
                <AddIcon />
            </Fab>
            <Fab aria-label="Edit" className={classes.fab}>
                <DeleteIcon />
            </Fab>
        </div>
    );
}

const MoodInfo = () => {
    const classes = useStyles();
    return(
        <div className="input_row">
            <h4>Mood Info</h4>
            <Fab aria-label="Add" className={classes.fab_r}>
                <AddIcon />
            </Fab>
            <Fab aria-label="Edit" className={classes.fab_r}>
                <DeleteIcon />
            </Fab>
        </div>
    );
}

const SymptomsInfo = () => {
    const classes = useStyles();
    return(
        <div className="input_row">
            <h4>Symptoms Info</h4>
            
            <Fab aria-label="Add" className={classes.fab_b}>
                <AddIcon />
            </Fab>
            <Fab aria-label="Add" className={classes.fab_b}>
                <AddIcon />
            </Fab>
            <Fab aria-label="Add" className={classes.fab_b}>
                <AddIcon />
            </Fab>
            <Fab aria-label="Add" className={classes.fab_b}>
                <AddIcon />
            </Fab>
            <Fab aria-label="Add" className={classes.fab_b}>
                <AddIcon />
            </Fab>
            <Fab aria-label="Add" className={classes.fab_b}>
                <AddIcon />
            </Fab>

        </div>
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
