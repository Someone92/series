import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/en-gb';

import './calendar.scss';


import CalendarWrapper from './CalendarWrapper';
import CalendarEvents from './CalendarEvents';

class Calendar extends Component {
    componentWillMount() {
        // Get current date ( year - month )
        // Access API - search ( year - month )
        //https://api.themoviedb.org/3/movie/550?api_key=681372a51b4a9e2ad5dd8a1323152c14
        
        console.log(moment().toString());
        console.log('test');
    }
    handleSelectedEvent(event) {
        console.log('test' + event.episode);
    }
    render() {
        moment.locale('cs');
        const localizer = BigCalendar.momentLocalizer(moment);

        const Calendar = props => (
              <BigCalendar
                components={{
                    eventWrapper: CalendarWrapper
                }}
                localizer={localizer}
                events={CalendarEvents}
                onSelectEvent={(event) => this.handleSelectedEvent(event)}
                
              />
          )

        return (
            <div className="calendar">
                <Calendar></Calendar>
            </div>
        )
    }
}

export default Calendar;