import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './system-user/user-list/user-list.component';
import {RoleListComponent} from './system-role/role-list/role-list.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routers} from './pages.routing';
import {AddUserComponent} from './system-user/add-user/add-user.component';
import {AddRoleComponent} from './system-role/add-role/add-role.component';
import {DownloadComponent} from './file/download/download.component';
import {HeroListComponent} from './heroes/hero-list/hero-list.component';
import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';


@NgModule({
  declarations: [
    UserListComponent,
    RoleListComponent,
    AddUserComponent,
    AddRoleComponent,
    DownloadComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(routers),
    CommonModule
  ]
})
export class PagesModule { }
