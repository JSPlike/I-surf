import React, { Component } from 'react';
import './Calendar.css';
import { makeStyles } from '@material-ui/core/styles';

import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import AppsIcon from '@material-ui/icons/Apps';
import GamesIcon from '@material-ui/icons/Games';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#ffffff",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        position: "fixed",
        // left: "0",
        bottom: "0",
        width: "100vw",
        maxWidth: "500px",
    }
}));

var today = new Date();
//var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

const BottomNaviInfo = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return(
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction label="Calendar" icon={<GamesIcon />} />
            <BottomNavigationAction label="Graph" icon={<AppsIcon />} />
        </BottomNavigation>
    );
}
 
export default class Calendar extends Component {

    render() {
        return (
            <section className="Calendar_Size">
                <BottomNaviInfo></BottomNaviInfo>
                <InfiniteCalendar
                    width={(window.innerWidth <= 500) ? window.innerWidth : 500}
                    height={window.innerHeight - 204}
                    selected={today}
                    // disabledDays={[0,6]}
                    // minDate={lastWeek}

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
                
            </section>
        );
    }
}
