import {Injectable} from '@angular/core';
import {HttpConfigService} from '../service/http-config.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router,
              private config: HttpConfigService) {}

  private authApi = this.config.BASE_API + '/authenticate';
  redirectUrl: string;
  static token;

  /**
   * login with username and password
   * @param body
   */
  login(body: any) {
     this.http.post(this.authApi+"/login", body)
      .subscribe(res => {
        if (res['code'] === 0) {
          localStorage.setItem('jwt', res['data']['jwt']);
          AuthService.token = localStorage.getItem('jwt');
          console.log(localStorage.getItem('jwt'));
          this.router.navigateByUrl('/pages/home').then();
        }
      })
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/login').then();
  }

  isLogin() :boolean {
    const jwt = localStorage.getItem('jwt');
    return !!jwt;
  }

  static getToken() : any{
    return this.token;
  }
}
