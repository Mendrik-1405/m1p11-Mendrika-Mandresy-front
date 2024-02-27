import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AjoutServiceComponent } from "./ajout-service.component";

@NgModule({
  declarations: [
    AjoutServiceComponent
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

export class AjoutServiceModule {}