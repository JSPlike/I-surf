import React, {Component} from 'react'
import InfiniteCalendar from 'react-infinite-calendar';

var today = new Date();
var lastMonth = new Date(today.getFullYear(), today.getMonth()-2, today.getDate());
var afterMonth = new Date(today.getFullYear(), today.getMonth()+2, today.getDate());

class infiniteCalendar extends Component{
    
    render(){
        return(
            <InfiniteCalendar
                        width={(window.innerWidth <= 500) ? window.innerWidth : 500}
                        height={window.innerHeight - 204}
                        selected={today}
                        min={lastMonth}
                        max={afterMonth}
                        onSelect={this.props.onSelect}
    
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
        )
    }
}

export default infiniteCalendar