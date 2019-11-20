import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {HttpConfigService} from '../service/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService,
              private config: HttpConfigService) {}

  private baseApi = this.config.loginUrl;

  /**
   * login with username and password
   * @param body
   */
  login(body: any) {
    return this.http.post(this.baseApi, body)
  }

  /**
   * login as guest without any login information
   */
  guest() {
    return this.http.get(this.baseApi);
  }
}
