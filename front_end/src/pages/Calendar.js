import React from 'react';
import './Calendar.css';
// import './Input.css';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Modal from '@material-ui/core/Modal'

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
    },

    paper: {
        // position: 'absolute',
        width: '90vw',
        maxWidth: '500px',
        background: 'linear-gradient(45deg,  rgba(248,196,249,0.66) 22.8%, rgba(253,122,4,0.15) 64.6% )',
        backgroundPosition: 'center',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 4),
        height : '100vh',
        overflowY: 'auto',
        margin: 'auto',
    },
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

var today = new Date();
var lastMonth = new Date(today.getFullYear(), today.getMonth()-2, today.getDate());
var afterMonth = new Date(today.getFullYear(), today.getMonth()+2, today.getDate());

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

// const rand = () => {
//     return Math.round(Math.random() * 20) - 10;
// }

// const getModalStyle = () => {
//     const top = 50 + rand();
//     const left = 50 + rand();

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

// const ModalInfo = (isModalOpen) => {
//     const classes = useStyles();
//     // getModalStyle is not a pure function, we roll the style only on the first render
//     const [modalStyle] = React.useState(getModalStyle);

//     const handleClose = () => {
//         this.props.isModalOpen = false;
//     }

//     return (
//         <div>
//           <Modal
//             aria-labelledby="simple-modal-title"
//             aria-describedby="simple-modal-description"
//             open={isModalOpen}
//             onClose={handleClose}
//           >
//             <div style={modalStyle} className={classes.paper}>
//               <h2 id="simple-modal-title">Text in a modal</h2>
//               <p id="simple-modal-description">
//                 Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//               </p>
//               <ModalInfo />
//             </div>
//           </Modal>
//         </div>
//       );
// }

// export default class Calendar extends Component {


//     classes = useStyles();
//     // getModalStyle is not a pure function, we roll the style only on the first render
//     [modalStyle] = React.useState(getModalStyle);
//     [open, setOpen] = React.useState(false);

//     handleOpen = () => {
//         setOpen(true);
//     };
    
//     handleClose = () => {
//         setOpen(false);
//     };

//     render() {

        

//         return (
//             <section className="Calendar_Size">

//                 <div>
//                     <Modal
//                         aria-labelledby="simple-modal-title"
//                         aria-describedby="simple-modal-description"
//                         open={open}
//                         onClose={handleClose}
//                     >
//                         <div style={modalStyle} className={classes.paper}>
//                         <h2 id="simple-modal-title">Text in a modal</h2>
//                         <p id="simple-modal-description">
//                             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                         </p>
//                         <ModalInfo />
//                         </div>
//                     </Modal>
//                 </div>

//                 {/* <ModalInfo isOpen={isModalOpen}/> */}
//                 <BottomNaviInfo></BottomNaviInfo>
//                 <InfiniteCalendar
//                     width={(window.innerWidth <= 500) ? window.innerWidth : 500}
//                     height={window.innerHeight - 204}
//                     selected={today}
//                     // disabledDays={[0,6]}
//                     min={lastMonth}
//                     max={afterMonth}

//                     onSelect={this.handleOpen}

//                     theme={{
//                         selectionColor: 'rgb(235, 64, 47)',
//                         textColor: {
//                         default: '#333',
//                         active: '#FFF'
//                         },
//                         weekdayColor: 'rgb(237, 103, 98)',
//                         headerColor: 'rgb(235, 64, 47)',
//                         floatingNav: {
//                         background: 'rgba(81, 67, 138, 0.96)',
//                         color: '#FFF',
//                         chevron: '#FFA726'
//                         }
//                     }}

//                     displayOptions={{
//                         showOverlay: false,
//                     }}
//                 />
                    
//             </section>
//         );
//     }
// }

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

export default function Calendar() {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    //const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section className="Calendar_Size">
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div className={classes.paper}>
                    {/* <h2 id="simple-modal-title">Text in a modal</h2>
                    <p id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                    <ModalInfo /> */}

                        <PersonInfo></PersonInfo>
                        <hr />
                        <MoodInfo></MoodInfo>
                        <hr />
                        <SymptomsInfo></SymptomsInfo>
                        <hr />
                    </div>
                </Modal>
            </div>

                {/* <ModalInfo isOpen={isModalOpen}/> */}
                <BottomNaviInfo></BottomNaviInfo>
                <InfiniteCalendar
                    width={(window.innerWidth <= 500) ? window.innerWidth : 500}
                    height={window.innerHeight - 204}
                    selected={today}
                    // disabledDays={[0,6]}
                    min={lastMonth}
                    max={afterMonth}

                    onSelect={handleOpen}

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

                displayOptions={{
                    showOverlay: false,
                }}
            />
                    
        </section>
    )
}