import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { DepenseComponent } from "./depense.component";
import { DepenseService } from "../services/depense.service";
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DepenseComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    DepenseService
  ]
})

export class DepenseModule {}