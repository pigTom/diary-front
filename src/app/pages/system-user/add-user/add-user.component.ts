import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }
  add() {
    this.userService.addUser(this.user).subscribe(res => {
      if (res['code'] === 0) {
        this.router.navigateByUrl("system-user").then();
        console.log('新增成功');
      }
    });
  }
}
