import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import { first } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

import { AuthenticationService } from '@services/authentication.service';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
	email = faEnvelope;
	password = faLock;


	loginForm: FormGroup;
	returnUrl: string;

	constructor(private formBuilder: FormBuilder,
				private authService: AuthenticationService,
				private route: ActivatedRoute,
				private router: Router) { }

	ngOnInit() {
		console.log(environment.APIEndpoint)

		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
		console.log('Return Url: ', this.returnUrl);

		this.loginForm = this.formBuilder.group({
			email: ['jens@gmail.com', Validators.required],
			password: ['secret123', Validators.required]
		});

		this.authService.logout();
	}

	get f() { return this.loginForm.controls; }

	onSubmit() {
		//console.log(this.f.email.value);
		//console.log(this.f.password.value);

		this.authService.login(this.f.email.value, this.f.password.value)
			.pipe(first())
			.subscribe(data => {
				console.log(data);
				this.router.navigate([this.returnUrl]);
			}, error => {
				console.log(error);
			});
	}

}
