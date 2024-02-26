import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';


@Component({
    selector: 'porte-feuille',
    templateUrl: 'porte-feuille.component.html'
})

export class PorteFeuilleComponent {

    montant!: number | 0;

}