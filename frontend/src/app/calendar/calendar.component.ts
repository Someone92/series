import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CalendarEvent } from 'angular-calendar';
import {
	startOfDay,
	endOfDay,
	subDays,
	addDays,
	endOfMonth,
	isSameDay,
	isSameMonth,
	addHours
  } from 'date-fns';



import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


interface Episode {
	title: string;
	first_aired: Date;
	allDay: boolean;
	episode: any;
};
interface TT {
	first_aired: Date;
	episode: {
		title: string;
	};
};
@Component({
	selector: 'app-calendar',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
	angleLeft = faAngleDoubleLeft;
	angleRight = faAngleDoubleRight;

	private title = 'Calendar - Wiking';

	constructor(private titleService: Title,
				private http: HttpClient) {
		this.titleService.setTitle(this.title);
	}
	view: string = "month";

	viewDate: Date = new Date();
	events: Observable<Array<CalendarEvent<{ episode: Episode }>>>;
	
	test: string = 'THIS IS A TEST';

	ngOnInit() {
		this.traktEvent();
		//console.log(this.viewDate);
		this.getNextPrevMonth();
	}

	monthNameNext: string;
	monthNamePrev: string;
	
	getNextPrevMonth() {
		let monthNumber = this.viewDate.getMonth();
		var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'];

		if(monthNumber == 0) {
			// Prev month is December
			this.monthNameNext = monthNames[monthNumber + 1];
			this.monthNamePrev = monthNames[11];
		} else if(monthNumber == 11) {
			// Next month is January
			this.monthNameNext = monthNames[0];
			this.monthNamePrev = monthNames[monthNumber - 1];
		} else {
			this.monthNameNext = monthNames[monthNumber + 1];
			this.monthNamePrev = monthNames[monthNumber - 1];
		}
	}




	traktEvent() {
		const _headers = new HttpHeaders()
			.set('Authorization', 'Bearer 7c1ab6ee8853f04fd6134f7f5f1d72a0e01d9bcd8baf4ab9c0086aeefb856be5')
			.set('trakt-api-version', '2')
			.set('trakt-api-key', "08dc20c4dc6e51bc84a33d66c7c69c22811a9bbae193ca07f04d4404abf9607d");
		const httpOptions = {
			headers: _headers
		};

		this.events = this.http
			.get('https://api.trakt.tv/calendars/all/shows/2018-10-30/1', httpOptions)
			.pipe(
				map((results: any[]) => {
						return results.map(tt => {
							return {
								"title": tt.show.title,
								"start": new Date(tt.first_aired),
								allDay: true
							};
						});
				})
			);
	}

}
