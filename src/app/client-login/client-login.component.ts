import { Component } from '@angular/core';
import { LayoutService } from '../layout/service/app.layout.service';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-client-login',
    templateUrl: './client-login.component.html',
    styleUrl: './client-login.component.scss'
})
export class ClientLoginComponent {

    loading: boolean = false;

    client: Client = {
        nom: 'client',
        password: 'client'
    }


    constructor(public layoutService: LayoutService,private router: Router, public clientService: ClientService) { }

    submitForm(): void {
        try {
                this.loading=true;
                this.validateClient();
                this.clientService.login(this.client).subscribe((data) => {
                    var client: Client = data;
                    if(client!==null){
                        localStorage.setItem('client', JSON.stringify(client));
                        localStorage.setItem('role','client');
                        this.router.navigate(['user/c/my-rdv']);
                    }else{
                        alert('Invalid employe');
                    }
                });
                setTimeout(() => {
                    // Simuler une requête HTTP de connexion réussie pendant 2 secondes
                    this.loading = false;
                  }, 2000);
        } catch (error) {
            alert('error' + error);
        }
    }


    validateClient(): void {
        if (this.client.nom === undefined || this.client.password === undefined) {
            throw new Error('Invalid client');
        }
    }
}
