import React, { Component } from 'react';
import { Calendar, Graph } from './'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppsIcon from '@material-ui/icons/Apps';
import GamesIcon from '@material-ui/icons/Games';

class Kaya extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "Calendar",
            canClick: true
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
            value: "Graph"
        })
    }

    handler = () => {
        this.setState({
            canClick: false
        })
    }

    render() {
        return (
            <div>
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