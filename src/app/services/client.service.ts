import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicePref } from '../models/servicePref';
import { EmployePref } from '../models/employePref';
import { Client } from '../models/client';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  };

@Injectable({
    providedIn: 'root'
})

export class ClientService {
    
    private apiUrl1 = environment.baseApiURL+'/client/pref/service/65dde36d9b01b0c109183039'; //URL GET Preference
    private apiUrl2 = environment.baseApiURL+'/client/pref/emp/65dde36d9b01b0c109183039'; //URL GET Preference

  constructor(private http: HttpClient, public router: Router, private cookieService: CookieService) { }

  getAllServicePref(): Observable<ServicePref[]> {
      return this.http.get<ServicePref[]>(this.apiUrl1);
  }

  getAllEmployePref(): Observable<EmployePref[]> {
    return this.http.get<EmployePref[]>(this.apiUrl2);
  }

  login(client: Client):Observable<Client> {
    return this.http.post<Client>(`${environment.baseApiURL}/client/login`, client,httpOptions);
  }
  getToken() {
    return this.cookieService.get('token');
  }

}