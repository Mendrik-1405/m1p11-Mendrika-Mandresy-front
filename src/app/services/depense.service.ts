import { Injectable } from '@angular/core';
import { Depense } from '../models/depense';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DepenseService {

    private apiUrl = environment.baseApiURL+'/depense';

    constructor(private http: HttpClient) { }

    getAllDepense(): Observable<Depense[]> {
        return this.http.get<Depense[]>(this.apiUrl);
    }

}