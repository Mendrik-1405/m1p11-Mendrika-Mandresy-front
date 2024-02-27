import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PorteFeuilleComponent } from "./porte-feuille.component";

@NgModule({
  declarations: [
    PorteFeuilleComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    BrowserModule,
    FormsModule
  ],
  providers: []
})

export class PorteFeuilleModule {}