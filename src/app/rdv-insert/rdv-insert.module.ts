import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RdvInsertComponent } from './rdv-insert.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { RdvService } from '../services/rdv.service';


@NgModule({
  declarations: [RdvInsertComponent],
  imports: [
    CommonModule,
    CalendarModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [
    RdvService,
  ]
})
export class RdvInsertModule { }
