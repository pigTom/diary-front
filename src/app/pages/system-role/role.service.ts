import {Role} from './role';
import {Query} from './query';
import {Injectable} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {HttpConfigService} from '../../service/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private role_base_url = this.config.BASE_API + "/system_role";

  constructor(private http: HttpService,
              private config: HttpConfigService) {
  }
  add(body: Role) {
    return this.http.post(this.role_base_url, body);
  }

  update(body: Role) {
    return this.http.put(this.role_base_url, body);
  }

  delete(body: number) {
    return this.http.delete(this.role_base_url + body);
  }

  getList(query: Query){
    return this.http.post(this.role_base_url + "/getList", query);
  }
}
