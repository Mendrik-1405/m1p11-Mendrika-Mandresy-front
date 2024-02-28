import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Rdv } from '../models/rdv';
@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private apiUrl = environment.baseApiURL+'/rdv'
  
  constructor(private http: HttpClient) { }

  findByIdemploye(id: string): Observable<Rdv[]> {
    const url = `${this.apiUrl}/rdvempl/${id}`;
    return this.http.get<Rdv[]>(url);
  }

  
  createRdv(json: string): Observable<Rdv> {
    const url = `${this.apiUrl}`;
    return this.http.post<Rdv>(url,json);
  }
}
