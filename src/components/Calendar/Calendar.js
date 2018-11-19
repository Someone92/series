import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/en-gb';

import './calendar.scss';

import axios from 'axios';
import CalendarWrapper from './CalendarWrapper';
import CalendarToolbar from './CalendarToolbar';
import CalendarEvents from './CalendarEvents';

class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            testData: undefined
        };
    }


    componentWillMount() {
        // Get current date ( year - month )
        // Access API - search ( year - month )
        //https://api.themoviedb.org/3/movie/550?api_key=681372a51b4a9e2ad5dd8a1323152c14
        
        console.log(moment().toString());

        axios.get('https://api.trakt.tv/calendars/all/shows/2018-11-14/1', {
            headers: {
                Authorization: "Bearer " + process.env.REACT_APP_AUTHORIZATION_KEY,
                "trakt-api-version": process.env.REACT_APP_TRAKT_API_VERSION,
                "trakt-api-key": process.env.REACT_APP_TRAKT_API_KEY
            }}).then(res => {
                
                this.setState({testData: res.data});
            });
    }


    handleSelectedEvent(event) {
        console.log('test' + event.episode);
    }
    render() {
        if(!this.state.testData) return 'LOADING MAFAKA';
        moment.locale('cs');
        const localizer = BigCalendar.momentLocalizer(moment);
        console.log(this.state.testData);


        const Calendar = props => (
              <BigCalendar
                components={{
                    eventWrapper: CalendarWrapper,
                    toolbar: CalendarToolbar
                }}
                localizer={localizer}
                //events={CalendarEvents}
                events={this.state.testData}
                onSelectEvent={(event) => this.handleSelectedEvent(event)}
                startAccessor='first_aired'
                endAccessor='first_aired'

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