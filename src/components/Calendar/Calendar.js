import React, { Component } from 'react';

import './calendar.scss';

import BigCalendar from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/en-gb';


class Calendar extends Component {

    render() {
        moment.locale('cs');
        const localizer = BigCalendar.momentLocalizer(moment);    
        
        const EpisodeEvent = ({event}) => (
            <div className="episode-event">
                <label htmlFor={event.title}>
                    <input type="checkbox" id={event.title} />
                </label>
                    <div className="title">{event.title}</div>
                    <div className="episode">{event.episode}</div>
                
            </div>
        );
        
        const events = [
            {
                title: 'The Simpsons',
                episode: 'S22E01',
                start: new Date('2018-10-01'),
                end: new Date('2018-10-01')
            },
            {
                title: 'Manifest',
                episode: 'S02E02',
                start: new Date('2018-10-02'),
                end: new Date('2018-10-02')
            },
            {
                title: 'The Gifted',
                episode: 'S02E02',
                start: new Date('2018-10-03'),
                end: new Date('2018-10-03')
            },
            {
                title: 'SEAL Team',
                episode: 'S02E02',
                start: new Date('2018-10-04'),
                end: new Date('2018-10-04')
            },
            {
                title: 'South Park',
                episode: 'S02E02',
                start: new Date('2018-10-04'),
                end: new Date('2018-10-04')
            },
            {
                title: 'Its Always Sunny in Philadelphia',
                episode: 'S02E02',
                start: new Date('2018-10-04'),
                end: new Date('2018-10-04')
            },
            {
                title: 'The Big Bang Theory',
                episode: 'S02E02',
                start: new Date('2018-10-05'),
                end: new Date('2018-10-05')
            },
            {
                title: 'The Good Place',
                episode: 'S02E02',
                start: new Date('2018-10-05'),
                end: new Date('2018-10-05')
            },
            {
                title: 'Young Sheldon',
                episode: 'S02E02',
                start: new Date('2018-10-05'),
                end: new Date('2018-10-05')
            },
            {
                title: 'Impractical Jokers',
                episode: 'S02E02',
                start: new Date('2018-10-05'),
                end: new Date('2018-10-05')
            },
            {
                title: 'The Man in the High Castle',
                episode: 'S02E02',
                start: new Date('2018-10-05'),
                end: new Date('2018-10-14')
            },
            {
                title: 'Speechless',
                episode: 'S02E02',
                start: new Date('2018-10-06'),
                end: new Date('2018-10-06')
            },
            {
                title: 'Van Helsing',
                episode: 'S02E02',
                tooltip: 'test',
                start: new Date('2018-10-06 02:00'),
                end: new Date('2018-10-06 05:00')
            },
            {
                title: 'Hells Kitchen (US)',
                episode: 'S02E02',
                start: new Date('2018-10-06 06:00'),
                end: new Date('2018-10-06 08:00')
            },
            {
                title: 'Doctor Who',
                episode: 'S02E02',
                start: new Date('2018-10-07'),
                end: new Date('2018-10-07')
            }
        ]





        const Calendar = props => (
              <BigCalendar
                localizer={localizer}
                events={events}
                components={{
                    event: EpisodeEvent
                }}
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