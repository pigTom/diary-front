import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  constructor() { }

  public ip = 'http://localhost:8080';
  public systemRoleBaseUrl = '/api/v0.1/system-role/';
  public loginUrl = '/api/v0.1/login/';
  public systemUserBaseUrl = '/api/v0.1/system-user/';
}
