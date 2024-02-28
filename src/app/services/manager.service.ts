import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Manager } from '../models/manager';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};
@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient, public router: Router, private cookieService: CookieService) { }
  login(employe: Manager):Observable<Manager> {
    return this.http.post<Manager>(`${environment.baseApiURL}/manager/login`, employe,httpOptions);
  }
  getToken() {
    return this.cookieService.get('token');
  }
  getAllManager(): Observable<Manager[]> {
    return this.http.get<Manager[]>(`${environment.baseApiURL}/manager`);
  }
  getManagerbyId(id: string):Observable<Manager> {
    return this.http.get<Manager>(`${environment.baseApiURL}/manager/${id}`);
  }
}
