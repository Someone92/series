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
	private title = 'Calendar | Wiking';

	constructor(private titleService: Title,
				private http: HttpClient) {
		this.titleService.setTitle(this.title);
	}

	viewDate: Date = new Date();
	//events = [];

	events: Observable<Array<CalendarEvent<{ episode: Episode }>>>;
	
	
	ngOnInit() {
		//this.events = [
		//	{
		//		start: subDays(startOfDay(new Date()), 1),
		//		title: 'A 3 day event',
		//		allDay: true
		//	}
		//  ];
		this.test();
	}

	eventHolder = [];
	test() {
		const _headers = new HttpHeaders()
			.set('Authorization', 'Bearer 7c1ab6ee8853f04fd6134f7f5f1d72a0e01d9bcd8baf4ab9c0086aeefb856be5')
			.set('trakt-api-version', '2')
			.set('trakt-api-key', "08dc20c4dc6e51bc84a33d66c7c69c22811a9bbae193ca07f04d4404abf9607d");
		const httpOptions = {
			headers: _headers
		};

		//return this.http.get("https://api.trakt.tv/calendars/all/shows/2018-11-29/1", httpOptions).subscribe(
		//	res => {
		//		console.log(res);
		//		for(let dd in res) {
		//			let event = res[dd];
		//			console.log(new Date(event.first_aired));
		//			console.log(subDays(startOfDay(new Date()), 1))
		//			const tt = {
		//				"start": new Date(event.first_aired),
		//				"title": event.episode.title,
		//				allDay: true,
		//			};
		//			this.events.push(tt);
		//			if(parseInt(dd) == 10) {
		//				break;
		//			}
		//		}
		//	  },
		//	  err => {
		//		console.log('Error occurred', err);
		//	  });
			  




		this.events = this.http
			.get('https://api.trakt.tv/calendars/all/shows/2018-11-30/1', httpOptions)
			.pipe(
				map((results: any[]) => {
					
					console.log('test');
					
						return results.map(tt => {
							console.log(tt.episode.title);
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
