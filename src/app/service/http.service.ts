import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
              private router: Router) {
  }
  private static setHeader() {
    return{'headers': new HttpHeaders({
        // 'Content-Type': 'application/json',
        // "Access-Control-Allow-Origin": "*",
        // 'Accept': 'application/json',
        // 'Authorization': 'Bearer ' + sessionStorage.getItem('jwt')

        'Content-Type': 'application/json; charset=utf-8',
        // 'Accept': 'application/json',
        'Authorization': localStorage.getItem('jwt') ? `Bearer ${localStorage.getItem('jwt')}` : '',
        // 'username': 'tang',
      })}
  }

  public put(url, body) {
    return this.http.put(url, body, HttpService.setHeader()).pipe(
      catchError((err => this.handleError(err)))
    );
  }

  public post(url, body) {
    return this.http.post(url, body, HttpService.setHeader()).pipe(
      catchError((err => this.handleError(err)))
    );
  }

  public delete(url) {
    return this.http.delete(url, HttpService.setHeader())
      .pipe(
        catchError((err => this.handleError(err)))
      );
  }

  public get(url) {
    return this.http.get(url, HttpService.setHeader())
      .pipe(
        catchError((err => this.handleError(err)))
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 403) {
      this.router.navigate(['/login']).then(() => {
        console.log("you don`t have any authority to access: " + error.message);
      })
    }
    return throwError('error');
  }
}
