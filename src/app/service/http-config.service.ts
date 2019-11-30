import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  constructor() { }

  public ip = 'http://localhost:8089';
  public BASE_API = this.ip + '/api/v0.1';
}
