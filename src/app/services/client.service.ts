import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicePref } from '../models/servicePref';
import { EmployePref } from '../models/employePref';

@Injectable({
    providedIn: 'root'
})

export class ClientService {
    
    private apiUrl1 = environment.baseApiURL+'/client/pref/service/65dde36d9b01b0c109183039'; //URL GET Preference
    private apiUrl2 = environment.baseApiURL+'/client/pref/emp/65dde36d9b01b0c109183039'; //URL GET Preference

  constructor(private http: HttpClient) { }

  getAllServicePref(): Observable<ServicePref[]> {
      return this.http.get<ServicePref[]>(this.apiUrl1);
  }

  getAllEmployePref(): Observable<EmployePref[]> {
    return this.http.get<EmployePref[]>(this.apiUrl2);
}

}