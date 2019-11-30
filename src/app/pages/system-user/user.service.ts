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

  private systemUserBaseApi = this.config.BASE_API + '/system_user';

  header = new HttpHeaders();

  public getUserList(query: any) {
    return this.http.post(this.systemUserBaseApi+'/getList', query).pipe();
  }
  public addUser(user) {
    return this.http.post(this.systemUserBaseApi, user);
  }

  public exportToExcel() {
      window.location.href = this.systemUserBaseApi+'/export-excel';
  }
}
