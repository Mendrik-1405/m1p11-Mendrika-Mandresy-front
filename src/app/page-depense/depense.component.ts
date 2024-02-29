import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Depense } from '../models/depense';
import { DepenseService } from '../services/depense.service';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

interface Type {
    name: string;
}

@Component({
    selector: 'depense',
    templateUrl: 'depense.component.html'
})

export class DepenseComponent implements OnInit {

    depenses!: Depense[];
    types!: Type[] | undefined;

    depense = {
        type : '',
        montant : null,
        date : null
    };

    constructor(private depenseService: DepenseService) {}

    ngOnInit() {
        this.types = [
            { name: 'Loyer'},
            { name: 'Jirama'},
            { name: 'Salaire'},
            { name: 'Autre'}
        ];

        this.depenseService.getAllDepense().subscribe((data) => {
            this.depenses = data;
        });
    }

    AjoutDepense() {
        this.depenseService.ajoutDepense(this.depense).subscribe(
            (response) => {
                // Gérer la réponse si nécessaire
                console.log('Dépense ajoutée avec succès', response);
                // Réinitialiser l'objet depense après l'ajout
                this.depense = {
                    type: '',
                    montant: null,
                    date: null
                };
            },
            (error) => {
                // Gérer les erreurs ici
                console.error('Erreur lors de l\'ajout de la dépense', error);
            }
        );
        this.depenseService.getAllDepense().subscribe((data) => {
            this.depenses = data;
        });
    }

}