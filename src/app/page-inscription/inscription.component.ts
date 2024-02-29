import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { ClientService } from "../services/client.service";
import { Router } from "@angular/router";

@Component({
    selector: 'page-inscription',
    templateUrl: 'inscription.component.html'
})

export class InscriptionComponent {

    client = {
        nom: '',
        email: '',
        phone: '',
        password: '',
        confirmation: ''
    }

    constructor(private clientService: ClientService, private router: Router) {}

    Inscription() {
        if(this.client.password === this.client.confirmation) {
            this.clientService.inscription(this.client).subscribe(
                (response) => {
                    console.log('Nouveau client inscrit avec succès', response);
                    this.client = {
                        nom: '',
                        email: '',
                        phone: '',
                        password: '',
                        confirmation: ''
                    };
                },
                (error) => {
                    console.error('Erreur lors de l\'inscription', error);
                }
            );
            this.router.navigate(['user/c/login']);
        }
        else {
            alert("Mot de passe incorrect! Veuillez vérifier.");
        }
    }
}