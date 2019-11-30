import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login.component';
import {MainNavComponent} from './pages/main-nav/main-nav.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children: [
      {
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        path: 'pages', // 项目的业务模块
        loadChildren: './pages/pages.module#PagesModule'
      }
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
