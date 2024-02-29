import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Employe } from '../models/employe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeService {
 
  constructor(private http: HttpClient, public router: Router, private cookieService: CookieService) { }
  login(employe: Employe):Observable<Employe> {
    return this.http.post<Employe>(`${environment.baseApiURL}/employe/login`, employe);
  }
  getToken() {
    return this.cookieService.get('token');
  }
  uploadEmployeData(formData: FormData) {
    return this.http.post(`${environment.baseApiURL}/employe/create`, formData);
  }
  getAllEmploye(): Observable<Employe[]> {
    return this.http.get<Employe[]>(`${environment.baseApiURL}/employe`);
  }
  getEmployebyId(id: string):Observable<Employe> {
    return this.http.get<Employe>(`${environment.baseApiURL}/employe/${id}`);
  }
  updateEmployehoraire(id: string, employe: Employe): Observable<Employe> {
    return this.http.put<Employe>(`${environment.baseApiURL}/employe/${id}`, employe);
  }
}
