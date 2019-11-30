import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With',
        // 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        // 'Accept': 'application/json',
        // 'Authorization': (sessionStorage.getItem('jwt') ? `Bearer ${sessionStorage.getItem('jwt')}` : ''),
      }
    });
    return next.handle(req);
  }
}
