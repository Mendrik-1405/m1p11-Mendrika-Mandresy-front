import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'service-ajout',
    templateUrl: 'ajout-service.component.html'
})

export class AjoutServiceComponent {
    nom : undefined;
    prix : undefined;
    duree : undefined;
    commission : undefined;
}