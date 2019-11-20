import {Component, OnInit} from '@angular/core';
import {Pager, Query} from '../query';
import {RoleService} from '../role.service';
import {Role} from '../role';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  private query = new Query();
  private pager = new Pager();
  roleList: Role[];

  constructor(private roleService: RoleService) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.roleService.getList(this.query).subscribe(res => {
      if (res['code'] === 0) {
        this.roleList = res['data']['list'];
        this.pager.count = res['data']['total'];
      }
    });
  }
}
