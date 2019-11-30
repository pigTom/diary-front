import {Injectable} from '@angular/core';
import {HttpService} from '../service/http.service';
import {HttpConfigService} from '../service/http-config.service';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private http: HttpService,
              private router: Router,
              private authService: AuthService,
              private config: HttpConfigService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLogin()) {
      return true;
    }
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']).then();
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
    return this.canActivate(childRoute, state);
  }
}
