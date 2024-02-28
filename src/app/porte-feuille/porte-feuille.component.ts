import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ClientService } from '../services/client.service';


@Component({
    selector: 'porte-feuille',
    templateUrl: 'porte-feuille.component.html'
})

export class PorteFeuilleComponent {

    solde !: number;

    porteFeuille!: number;

    constructor(private clientService: ClientService) {}

    ngOnInit() {
        this.clientService.getClientById().subscribe((data) => {
            this.solde = data.porteFeuille??0;
        });

    }

    Recharge() {
        this.porteFeuille = this.porteFeuille + this.solde;
        const client = {
            porteFeuille : this.porteFeuille
        };
        this.clientService.updatePorteFeuille(client).subscribe(
            (response) => {
                console.log('Compte rechargé avec succès', response);
            },
            (error) => {
                console.error('Erreur', error);
            }
        );
        this.clientService.getClientById().subscribe((data) => {
            this.solde = data.porteFeuille??0;
        });
    }

}