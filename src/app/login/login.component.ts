import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService) { }
  username;
  password;
  ngOnInit() {
  }
  login() {
    this.loginService.login({username: this.username, password: this.password})
      .subscribe(res => {
        if (res['code'] === 0) {
          this.router.navigateByUrl('/pages/home').then();
        }
      })
  }
  guest() {
    this.loginService.guest().subscribe(res => {
      if (res['code'] === 0) {
        this.router.navigate(['/pages/home']).then()

        // this.router.navigateByUrl('home').then();
      }
    })
  }
}
