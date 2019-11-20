import {Role} from './role';
import {Query} from './query';
import {Injectable} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {HttpConfigService} from '../../service/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpService,
              private config: HttpConfigService) {
  }
  add(body: Role) {
    return this.http.post(this.config.systemRoleBaseUrl, body);
  }

  update(body: Role) {
    return this.http.put(this.config.systemRoleBaseUrl, body);
  }

  delete(body: number) {
    return this.http.delete(this.config.systemRoleBaseUrl + body);
  }

  getList(query: Query){
    return this.http.post(this.config.systemRoleBaseUrl + "getList", query);
  }
}
