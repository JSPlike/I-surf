import React from 'react';
import './AppStore.css';
import {sendResult} from '../api/axios'

import { makeStyles } from '@material-ui/core/styles';
import Install from '@material-ui/core/Button';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import TodayIcon from '@material-ui/icons/Today';
import UpdatesIcon from '@material-ui/icons/Archive';
import AppsIcon from '@material-ui/icons/Apps';
import GamesIcon from '@material-ui/icons/Games';

import Fab from '@material-ui/core/Fab';

import Ferp from '../resources/Calendar - Blank.png'

const useStyles = makeStyles(theme => ({
    button: { 
        margin: theme.spacing(0.1),
        color: 'white',
        backgroundColor: '#3776f0',
    },
    input: {
        display: 'none',
    },
    root: {
        backgroundColor: "#ffffff",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
    },
    fab: {
        color: 'white',
        backgroundColor: '#3776f0',
    }
}));

// const TabBarComponent = (props) => (<BottomTabBar);
const AllInfo = () => {
    return(
        <section className="background_app_store">
            <NaviInfo></NaviInfo>
            <SimpleInfo></SimpleInfo>
            {/* line for distribute */}
            <hr
                style={{
                    color: "#E7E7E7",
                    height: 0.5,
                }}
            />
            <DescriptionInfo></DescriptionInfo>
        </section>
    )
}

//Simple Info View on Top of AppStore Page
function AppStoreScreen() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return(
        <section className="scroll_pages">
            <AllInfo></AllInfo>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
                >
                <BottomNavigationAction label="Today" icon={<TodayIcon />} />
                <BottomNavigationAction label="Games" icon={<GamesIcon />} />
                <BottomNavigationAction label="Apps" icon={<AppsIcon />} />
                <BottomNavigationAction label="Updates" icon={<UpdatesIcon />} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </section>
    );
}

const NaviInfo = () => {
    return(<div></div>);
}

const SimpleInfo = () => {
    

    function send() {
        console.log("send")
        sendResult()
    }
    const classes = useStyles();
    return(
        <article className="simple_info">
            <div className="Logo"><img src={Ferp} alt="logo"></img></div>
            <div className="AppName">
                <div className="AppName_Inside">
                    <h4>Ferp Period & Ovulation Tracker</h4>
                </div>
            </div>
            <div className="Com     panyName">
                <div className="CompanyName_Inside">
                    <p>UCI</p>
                </div>
            </div>
            <div className="InstallButton">
                <Install variant="contained" size="small"
                    className={classes.button}>Install
                 </Install>
            </div>
            <div className="BlankNull"></div>
            <div className="OtherButton">
                <Fab aria-label="Other" className={classes.fab} size = "small">
                    <MoreHorizIcon />
                </Fab>
            </div>
            <div className="Rating">
                <h4>4.7</h4>
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
    )
}

const DescriptionInfo = () => {
    return(
        <section className="AppDescription">
            <h4>Description</h4>
            <a5>Ferp Period Tracker, Ovulation & Fertility Calendar! It’s a smart and simple female period tracker, helpful pregnancy week by week app, accurate ovulation and fertility calendar and PMS symptoms tracker for women all over the world. Ferp Period Tracker not only tracks your period accurately, but it’s also a reliable pregnancy calculator, ovulation calendar, and true fertility friend for you. It’s the first period app, pregnancy calculator, fertility and ovulation calendar for women that uses machine learning (AI). All women, even those with irregular periods, can rely on this health tracker. Log your menstruation days in a handy period calendar, ovulation and fertility tracker, schedule menstrual cycle reminders, record moods and PMS symptoms, use a due date calculator, follow a pregnancy calendar and take full control of your health.
Want to know when your next period is coming? Confused by PMS symptoms? Want to take your birth control pills in time? With Ferp female period tracker, ovulation and fertility calendar it’s easy to keep track of your menstrual cycle.
            </a5>
        </section>
    )
}

export default AppStoreScreen