import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpConfigService} from './http-config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
              private config: HttpConfigService) {
  }

  private setHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  public put(url, body) {
    return this.http.put(this.config.ip + url, body, this.setHeader());
  }

  public post(url, body) {
    return this.http.post(this.config.ip + url, body, this.setHeader());
  }

  public delete(url) {
    return this.http.delete(this.config.ip + url, this.setHeader());
  }

  public get(url) {
    return this.http.get(this.config.ip + url, this.setHeader());
  }

  // public download(url, filename) {
  //   return fetch()
  //
  // }
}
