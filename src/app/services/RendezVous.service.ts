import { Injectable } from '@angular/core';
import { RendezVous } from '../models/RendezVous';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RendezVousService {
    
  private apiUrl = environment.baseApiURL+'/rdv'; //URL GET HISTORIQUE 

  constructor(private http: HttpClient) { }

  getAllHistoriqueRdv(): Observable<RendezVous[]> {
      return this.http.get<RendezVous[]>(this.apiUrl);
  }

}