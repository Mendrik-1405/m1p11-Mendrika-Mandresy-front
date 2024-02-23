import { Injectable } from '@angular/core';
import { Service } from '../models/service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ServiceService {

    private apiUrl = environment.baseApiURL+'/service';

    constructor(private http: HttpClient) { }

    getAllService(): Observable<Service[]> {
        return this.http.get<Service[]>(this.apiUrl);
    }
  
    getServiceById(id: string): Observable<Service> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Service>(url);
    }

}