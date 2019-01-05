import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  name = faUser;
  email = faEnvelope;
  password = faLock;

  constructor() { }

  ngOnInit() {
  }

}
