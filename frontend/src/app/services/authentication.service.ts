import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	private loggedIn = new BehaviorSubject<boolean>(false);

	get isLoggedIn() {
		return this.loggedIn.asObservable();
	}


	constructor(private http: HttpClient) { }


	login(username: string, password: string) {
		return this.http.post<any>(environment.APIEndpoint + '/api/login', { username, password })
			.pipe(map(user => {
				this.loggedIn.next(true);

				if(user && user.token) {
					localStorage.setItem('currentUser', JSON.stringify(user));
				}

				return user;
		}))
	}

	logout() {
		localStorage.removeItem('currentUser');
		this.loggedIn.next(false);
	}
}
