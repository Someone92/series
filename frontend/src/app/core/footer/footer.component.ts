import { Component, OnInit } from '@angular/core';

import { faCopyright } from '@fortawesome/free-regular-svg-icons';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
	year = new Date().getFullYear();
	copy = faCopyright;

	constructor() { }

	ngOnInit() {
	}

}
