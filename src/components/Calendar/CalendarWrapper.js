import React, { Component } from 'react';


class CalendarWrapper extends Component {

    handleChange(prop) {
        // Access parent .episode-wrapper
        // Set .episode-wrapper color to green if checked
        var parentDiv = prop.target.parentNode;
        if(prop.target.checked) {
            parentDiv.classList.add('watched');
        } else {
            parentDiv.classList.remove('watched');
        }
    }

    render() {
        
        return (
            <div className="episode-wrapper">
                {/*<label htmlFor={this.props.event.episode}>
                </label>
                <input type="checkbox" id={this.props.event.episode} onChange={this.handleChange}/>

                {/* Link to individual series overview 
                <a className="episode-info">
                    <div className="title">{this.props.event.title}</div>
                    <div className="episode">{this.props.event.episode}</div>
                </a>*/}
                {this.props.event.show.title}
            </div>
        )
    }
}

export default CalendarWrapper;
