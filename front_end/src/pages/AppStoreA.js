import React, {Component} from 'react';
import './AppStore.css';

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

import Ferp from '../resources/Calendar - Blank.png';
import Preview1 from '../resources/PreView1.jpeg';

import StarRatings from 'react-star-ratings'

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
        // left: "0",
        bottom: "0",
        width: "100%",
        maxWidth: "500px",
    },
    fab: {
        color: 'white',
        backgroundColor: '#3776f0',
        //width: 10,
        //height: 10,
    }
}));

const AllInfo = () => {
    return(
        <section className="background_app_store">
            <SimpleInfo></SimpleInfo>
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
    return(
        <section className="scroll_pages">
            <AllInfo></AllInfo>
        </section>
    );
}

const SimpleInfo = () => {

    const classes = useStyles();

    return(
        <article className="simple_info">
            <div className="Logo"><img src={Ferp} alt="logo"></img></div>
            <div className="AppName">
                <div className="AppName_Inside">
                    <h4>Ferp Period & Ovulation Tracker</h4>
                </div>
            </div>
            <div className="CompanyName">
                <div className="CompanyName_Inside">
                    <p>UCI</p>
                </div>
            </div>
            <div className="InstallButton">
                <button onClick={()=>{this.props.handler('Click the FERP application.')}}>
                <Install variant="contained" size="small"
                    className={classes.button}>Install
                 </Install>
                 </button>
            </div>
            <div className="BlankNull"></div>
            <div className="OtherButton">
                <Fab aria-label="Other" className={classes.fab} size = "small">
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
    )
}

const DescriptionInfo = () => {
    return(
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
            <p>Ferp Period Tracker, Ovulation & Fertility Calendar! 
                It’s a smart and simple female period tracker, helpful pregnancy week by week app, accurate ovulation and fertility calendar and PMS symptoms tracker for women all over the world. 
                Ferp Period Tracker not only tracks your period accurately, but it’s also a reliable pregnancy calculator, ovulation calendar, and true fertility friend for you. 
                [It’s the first period app, pregnancy calculator, fertility and ovulation calendar for women that uses machine learning (AI)]. 
                All women, even those with irregular periods, can rely on this health tracker. 
                Log your menstruation days in a handy period calendar, ovulation and fertility tracker, schedule menstrual cycle reminders, record moods and PMS symptoms, use a due date calculator, follow a pregnancy calendar and take full control of your health.
                Want to know when your next period is coming? Confused by PMS symptoms? Want to take your birth control pills in time? With Ferp female period tracker, ovulation and fertility calendar it’s easy to keep track of your menstrual cycle.
                <br /><br /><br />
            </p>
        </section>
    )
}

class AppStoreA extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <section className="background_app_store">
            <article className="simple_info">
            <div className="Logo"><img src={Ferp} alt="logo"></img></div>
            <div className="AppName">
                <div className="AppName_Inside">
                    <h4>Ferp Period & Ovulation Tracker</h4>
                </div>
            </div>
            <div className="CompanyName">
                <div className="CompanyName_Inside">
                    <p>UCI</p>
                </div>
            </div>
            <div className="InstallButton">
                <button onClick={()=>{this.props.handler('Click the FERP application.')}}>
                <Install variant="contained" size="small"
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
            <DescriptionInfo></DescriptionInfo>
        </section>
        )
    }
}

export default AppStoreA