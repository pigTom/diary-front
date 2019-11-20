import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Query} from '../query';
import {User} from '../user';

@Component({
  selector: 'app-system-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[];
  constructor(private systemUserService: UserService) { }
  query: Query;
  ngOnInit() {
    this.query = new Query();
    this.getList();
  }
  private getList() {
    this.systemUserService.getUserList(this.query).subscribe(res => {
      const code = 'code';
      const data = 'data';
      if (res && res[code] === 0) {
        this.userList = res[data]['list'];
      }
    });
  }

  private exportToExcel() {
    this.systemUserService.exportToExcel()
  }
}
