import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpService} from '../../service/http.service';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {


  constructor(private http: HttpService) { }
  public download() {
    window.location.href = `http://localhost:8080/api/v0.1/file/a.pdf`;
  }

  public downloadExcel() {
    window.location.href = `http://localhost:8080/api/v0.1/file/exportExcel`;
  }
}
