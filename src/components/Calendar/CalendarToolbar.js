import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CalendarToolbar extends Component {

    componentDidMount() {
        console.log(this.props)
        console.log(this.props.date)
    }
    navigate(action) {
        this.props.onNavigate(action)
    }

    render() {
        return (
            <div className="calendar-toolbar">
                <div className="toolbar-left">
                    <a onClick={() => this.navigate('PREV')}><FontAwesomeIcon icon="angle-double-left" /> - October</a>
                </div>
                <div className="toolbar-center">
                    {this.props.label}
                    
                </div>
                <div className="toolbar-right">
                    <a onClick={() => this.navigate('NEXT')}>December - <FontAwesomeIcon icon="angle-double-right" /></a>
                </div>
            </div>
        )
    }
}

export default CalendarToolbar