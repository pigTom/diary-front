import {Component, OnInit} from '@angular/core';
import {Role} from '../role';
import {RoleService} from '../role.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  role: Role;
  constructor(private roleService: RoleService,
              private router: Router,
              private toasterService: ToastrService) { }

  ngOnInit() {
    this.role = new Role();
  }

  add() {
    console.log(this.role);
    this.roleService.add(this.role).subscribe(res => {
      if (res['code'] === 0) {
        this.router.navigate(['/pages/roles']).then(() => {
          this.toasterService.success("新增成功");
        })
      } else {
        this.toasterService.error(res['message'])
      }
    })
  }
}
