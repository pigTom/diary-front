import { Component, OnInit } from '@angular/core';
import {Role} from '../role';
import {RoleService} from '../role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  role: Role;
  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.role = new Role();
  }

  add() {
    console.log(this.role);
    this.roleService.add(this.role).subscribe(res => {
      if (res['code'] === 0) {
        console.log('add success');
      } else {
        console.log(res['message'])
      }
    })
  }
}
