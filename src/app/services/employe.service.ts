import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Employe } from '../models/employe';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};
@Injectable({
  providedIn: 'root'
})

export class EmployeService {
 
  constructor(private http: HttpClient, public router: Router, private cookieService: CookieService) { }
  login(employe: Employe):Observable<Employe> {
    return this.http.post<Employe>(`${environment.baseApiURL}/employe/login`, employe,httpOptions);
  }
  getToken() {
    return this.cookieService.get('token');
  }
}
