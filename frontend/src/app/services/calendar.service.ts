import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CalendarService {

	constructor(private http: HttpClient) { }

	getFullMonth(date: string) {
		return this.http.get('http://localhost:8000/api/all/shows/' + date)
			.pipe(
				map((data:any[]) => {
					console.log(data)
					return data.map((episode) => {
						return {
							season: episode.season,
							number: episode.number,
							title: episode.title,
							start: new Date(episode.air_date),
							show_title: episode.show_title,
							allDay: true
						}
					})
				}), catchError(this.handleError.bind(this))
			)
	}

	private handleError(error: any) {
		console.error(error);
	}
}
