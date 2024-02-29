import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoraireComponent } from './horaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [HoraireComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule
  ]
})
export class HoraireModule { }
