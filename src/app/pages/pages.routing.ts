import {RouterModule, Routes} from '@angular/router';
import {RoleListComponent} from './system-role/role-list/role-list.component';
import {NgModule} from '@angular/core';
import {AddRoleComponent} from './system-role/add-role/add-role.component';
import {AddUserComponent} from './system-user/add-user/add-user.component';
import {UserListComponent} from './system-user/user-list/user-list.component';
import {HeroListComponent} from './heroes/hero-list/hero-list.component';
import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import {DownloadComponent} from './file/download/download.component';

export const routers: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }, {
    path: 'home',
    redirectTo: 'users',
    pathMatch: 'full'
  }, {
    path: 'users',
    component: UserListComponent
  },{
    path: 'roles',
    component: RoleListComponent
  },
  {
    path: 'add-role',
    component: AddRoleComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {path: 'heroes', component: HeroListComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
];

