import { Injectable } from '@angular/core';
import { RendezVous } from '../models/RendezVous';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
    providedIn: 'root'
})

export class RendezVousService {
 
  client: Client = JSON.parse(localStorage.getItem('client') || '{}');
  private apiUrl = environment.baseApiURL+'/client/my-rdv/'+this.client._id; //URL GET HISTORIQUE 

  constructor(private http: HttpClient) { }

  getAllHistoriqueRdv(): Observable<RendezVous[]> {
      return this.http.get<RendezVous[]>(this.apiUrl);
  }

}