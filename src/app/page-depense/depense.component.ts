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
    type!: Type | undefined;
    date!: Date | undefined;
    montant!: number | 0;

    depense = {
        type : this.type,
        date : this.date,
        montant : this.montant
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
        this.depenseService.ajoutDepense(this.depense).subscribe((data) => {
            console.log('Dépense ajoutée avec succès:', data);
        }, (error) => {
            console.error('Erreur lors de l\'ajout de la dépense:', error);
        });
    }

}