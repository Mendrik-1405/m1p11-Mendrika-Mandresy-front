import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicePref } from '../models/servicePref';
import { EmployePref } from '../models/employePref';
import { Client } from '../models/client';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
})

export class ClientService {
    
  client: Client = JSON.parse(localStorage.getItem('client') || '{}');
  private apiUrl1 = environment.baseApiURL+'/client/pref/service/'+this.client._id; //URL GET Preference
  private apiUrl2 = environment.baseApiURL+'/client/pref/emp/'+this.client._id; //URL GET Preference

  constructor(private http: HttpClient, public router: Router, private cookieService: CookieService) { }

  getClientById(): Observable<Client> {
    return this.http.get<Client>(environment.baseApiURL+'/client/'+this.client._id);
  }

  getAllServicePref(): Observable<ServicePref[]> {
      return this.http.get<ServicePref[]>(this.apiUrl1);
  }

  getAllEmployePref(): Observable<EmployePref[]> {
    return this.http.get<EmployePref[]>(this.apiUrl2);
  }

  login(client: Client):Observable<Client> {
    return this.http.post<Client>(`${environment.baseApiURL}/client/login`, client);
  }
  getToken() {
    return this.cookieService.get('token');
  }

  inscription(newClient: any): Observable<any> {
    return this.http.post(`${environment.baseApiURL}/client`, newClient);
  }
  
  updatePorteFeuille(updateClient: any): Observable<any> {
    return this.http.put(environment.baseApiURL+'/client/'+this.client._id, updateClient);
  }

}