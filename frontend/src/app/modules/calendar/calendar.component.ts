import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { WeekDay } from 'calendar-utils';
 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CalendarEvent, CalendarView } from 'angular-calendar';



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
	styleUrls: ['./calendar.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
	angleLeft = faAngleDoubleLeft;
	angleRight = faAngleDoubleRight;
	days: WeekDay[];

	private title = 'Calendar - Wiking';

	constructor(private titleService: Title,
				private http: HttpClient) {
		this.titleService.setTitle(this.title);
	}
	
	view: CalendarView = CalendarView.Week;
	CalendarView = CalendarView;


	viewDate: Date = new Date();
	time = new Date();
	events = [
		{
			"title": "Stargate",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 11),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 11)
		},
		{
			"title": "The Flash",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 12),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 12)
		},
		{
			"title": "Supernatural",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 14),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 14)
		},
		{
			"title": "Supergirl",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 14),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 14)
		},
		{
			"title": "Supergirl",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 14),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 14)
		},
		{
			"title": "Supergirl",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 14),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 14)
		},
		{
			"title": "Supergirl",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 14),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 14)
		},
		{
			"title": "Supergirl",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 14),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 14)
		},
		{
			"title": "Supergirl",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 14),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 14)
		},
		{
			"title": "Supergirl",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 14),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 14)
		},
		{
			"title": "Vikings",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 14),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 14)
		},
		{
			"title": "Game of thrones",
			"start": new Date(this.time.getFullYear(), this.time.getMonth(), 16),
			"end": new Date(this.time.getFullYear(), this.time.getMonth(), 16)
		}
	];
	ngOnInit() {
		//this.traktEvent();
		console.log(this.events);
		console.log(this.days);
		
	}

	//events: Observable<Array<CalendarEvent<{ episode: Episode }>>>;
	/*
	traktEvent() {
		const _headers = new HttpHeaders()
			.set('Authorization', 'Bearer 7c1ab6ee8853f04fd6134f7f5f1d72a0e01d9bcd8baf4ab9c0086aeefb856be5')
			.set('trakt-api-version', '2')
			.set('trakt-api-key', "08dc20c4dc6e51bc84a33d66c7c69c22811a9bbae193ca07f04d4404abf9607d");
		const httpOptions = {
			headers: _headers
		};

		this.events = this.http
			.get('https://api.trakt.tv/calendars/all/shows/2018-12-14/1', httpOptions)
			.pipe(
				map((results: any[]) => {
						return results.map(tt => {
							return {
								"title": tt.show.title,
								"start": new Date(tt.first_aired)
							};
						});
				})
			);
	}
	*/

}
