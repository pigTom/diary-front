import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }
  add() {
    this.userService.addUser(this.user).subscribe(res => {
      if (res['code'] === 0) {
        this.router.navigateByUrl("/pages/users").then();
        this.toastr.success('新增成功', "SUCCESS");
      }
    });
  }
}
