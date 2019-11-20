import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {MainNavComponent} from './pages/main-nav/main-nav.component';

const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children: [
      {
        path: 'error', // 错误
        component: PageNotFoundComponent
      },
      {
        path: 'pages', // 项目的业务模块
        loadChildren: './pages/pages.module#PagesModule'
      }
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
