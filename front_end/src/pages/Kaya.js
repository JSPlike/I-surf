import React, { Component } from 'react'
import { Calendar, Graph } from './'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import AppsIcon from '@material-ui/icons/Apps'
import GamesIcon from '@material-ui/icons/Games'
import Modal from '@material-ui/core/Modal'

class Kaya extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "Calendar",
            canClick: true,
            open: true,
            modalText: "Please click on today's date"
        }
        this.handler = this.handler.bind(this)
    }

    valueToCalendar = () => {
        this.setState({
            value: "Calendar"
        })
    }

    valueToGraph = () => {
        this.setState({
            value: "Graph",
            open: true,
            modalText: 'Please analyze the graph and then the press survey button'
        })
    }

    handler = () => {
        this.setState({
            canClick: false,
            open: true,
            modalText: 'Please access the graph'
        })
    }


    handleOpen = () => {
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}>
                    <div style={{
                    color: 'white',
                    textAlign: 'center',
                    }}>
                        <button onClick={this.handleClose}>X</button>
                        <div>{this.state.modalText}</div></div>
                </Modal>
                {this.state.value === "Calendar" ? <Calendar handler={this.handler} /> : <Graph />}
                <BottomNavigation showLabels className="root">
                    <BottomNavigationAction label="Calendar" onClick={this.valueToCalendar} value="Calendar" icon={<GamesIcon />} />
                    <BottomNavigationAction label="Graph" onClick={this.valueToGraph} value="Graph" icon={<AppsIcon />} />
                    <BottomNavigationAction label="Survey" disabled={this.state.canClick} onClick={() => { this.props.handler('Survey.') }} value="Survey" icon={<GamesIcon />} />
                </BottomNavigation>
            </div>
        )
    }
}

export default Kaya