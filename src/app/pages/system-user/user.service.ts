import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../../service/http.service';
import {HttpConfigService} from '../../service/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService,
              private config: HttpConfigService) { }

  header = new HttpHeaders();

  public getUserList(query: any) {
    return this.http.post(this.config.systemUserBaseUrl+'getList', query).pipe();
  }
  public addUser(user) {
    return this.http.post(this.config.systemUserBaseUrl, user);
  }

  public exportToExcel() {
      window.location.href = this.config.ip + this.config.systemUserBaseUrl+'export-excel';
  }
}
