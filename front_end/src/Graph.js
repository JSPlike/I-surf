import React from 'react';
import './Graph.css';

import { makeStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import AppsIcon from '@material-ui/icons/Apps';
import GamesIcon from '@material-ui/icons/Games';

import graphImage from './resources/graph.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#ffffff",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
        maxWidth: "500px",
    },
}));

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

const TopNaviInfo = () => {
    return(
        <section className="top_navigation">
            <div className="top_navigation_element">
                <h3>Data Charts For You</h3>
            </div>
        </section>
    )
}

export default function Graph() {
    return (
        <section className="background_graph">
            <TopNaviInfo />
            <img src={graphImage} alt="graph"></img>
            <BottomNaviInfo />
        </section>
    )
}
