import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  constructor(private loginService: AuthService) { }
  ngOnInit() {}

  login() {
    this.loginService.login({username: this.username, password: this.password});
  }
}
