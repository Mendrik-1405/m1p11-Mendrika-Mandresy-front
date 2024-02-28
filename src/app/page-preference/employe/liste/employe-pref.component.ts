import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ClientService } from '../../../services/client.service';
import { EmployePref } from '../../../models/employePref';

@Component({
  selector: 'employe-pref',
  templateUrl: 'employe-pref.component.html'
})

export class EmployePrefComponent implements OnInit{
  prefs!: EmployePref[];

  constructor(private prefEmploye: ClientService) {}

  ngOnInit() {
      this.prefEmploye.getAllEmployePref().subscribe((data) => {
          this.prefs = data;
      });
  }
}
